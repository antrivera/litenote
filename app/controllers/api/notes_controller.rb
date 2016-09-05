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

  def update
  end

  def destroy
  end

  private
  def note_params
    params.require(:note).permit(:title, :body, :notebook_id)
  end
end
