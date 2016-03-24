class StaticController < ApplicationController

  def home
    respond_to do |format|
      format.html	{ render :file => "public/views/pages/home.html" }
    end
  end

  def team
    respond_to do |format|
      format.html	{ render :file => "public/views/pages/team.html" }
    end
  end

end
