class Api::NotebooksController < ApplicationController
  def index
    @notebooks = Notebook.owned_by(current_user)
    render json: @notebooks
  end

  def create
    @notebook = Notebook.new(notebook_params)
    @notebook.author_id = current_user.id

    if @notebook.save
      render json: @notebook
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def update
    @notebook = Notebook.find(params[:id])

    if (@notebook.author_id == current_user.id) && @notebook.update(notebook_params)
      render json: @notebook
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  def destroy
    @notebook = Notebook.find(params[:id])

    if @notebook.author_id == current_user.id
      @notebook.delete
      render json: @notebook
    else
      render json: @notebook.errors.full_messages, status: 422
    end
  end

  private
  def notebook_params
    params.require(:notebook).permit(:title)
  end
end
