class StaticController < ApplicationController

  def home
    render :file => "public/views/pages/home.html"
  end

  def nba
    render :file => "public/views/pages/nba.html"
  end

  def team
    render :file => "public/views/pages/team.html"
  end

end
