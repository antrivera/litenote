class Api::NotesController < ApplicationController
  def index
    @notes = Note.owned_by(current_user)
    render json: @notes
  end

  def create
    @note = Note.new(note_params)

    notebook = @note.notebook
    notebook_owner = notebook.author_id == current_user.id

    if (notebook_owner && @note.save)
      render json: @note
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def show
    @note = Note.find(params[:id])

    if @note.notebook.author_id == current_user.id
      render json: @note
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def update
    @note = Note.find(params[:id])

    if (@note.notebook.author_id == current_user.id) && @note.update(note_params)
      params[:note][:tags].each do |tag_name|
        @note.tags.create(name: tag_name)
      end
      render json: @note
    else
      render json: @note.errors.full_messages, status: 422
    end
  end

  def destroy
    @note = Note.find(params[:id])

    if @note.notebook.author_id == current_user.id
      @note.delete
      notes = Note.owned_by(current_user)
      render json: notes
    else
      render json: @note.error.full_messages, status: 422
    end
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :notebook_id, :tags)
  end
end
