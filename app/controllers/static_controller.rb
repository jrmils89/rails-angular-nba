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

  def games
    respond_to do |format|
      format.html	{ render :file => "public/views/pages/games.html" }
    end
  end

  def playbyplay
    respond_to do |format|
      format.html	{ render :file => "public/views/pages/play-by-play.html" }
    end
  end

end
