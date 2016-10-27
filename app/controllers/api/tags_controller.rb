class Api::TagsController < ApplicationController
  def index
    render json: current_user.tags.uniq
  end

  def create
  end

  def show
    @tag = Tag.find(params[:id])

    if @tag
      tagged_notes = []
      @tag.notes.each do |note|
        tagged_notes << note if note.notebook.author_id == current_user.id
      end
      render json: tagged_notes
    else
      render json: @tag.errors.full_messages, status: 422
    end
  end

  def destroy
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
