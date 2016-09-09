class Api::TagsController < ApplicationController
  def index
    @tags = []
    current_user.notebooks.each do |notebook|
      notebook.notes.each do |note|
        note.tags.each { |tag| @tags << tag }
      end
    end

    render json: @tags.uniq
  end

  def create
  end

  def show
  end

  def destroy
  end

  private
  def tag_params
    params.require(:tag).permit(:name)
  end
end
