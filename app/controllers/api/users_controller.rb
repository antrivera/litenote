class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      default_notebook = @user.notebooks.new(title: "General", removable: false)
      default_notebook.save!
      default_notebook.notes.create!(title: "Welcome!", body: "Litenote is for the people.")
      login_user!(@user)

      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
