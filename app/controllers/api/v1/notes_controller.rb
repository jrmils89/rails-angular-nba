class Api::V1::NotesController < ApplicationController
  before_action :set_note, only: [:show, :edit, :update, :destroy]

  def index
    @notes = Note.all
    respond_to do |format|
      format.html	{ redirect_to "/"}
      format.json	{ render :json => @notes }
    end
  end

  def show
    respond_to do |format|
      format.html	{ redirect_to "/"}
      format.json	{ render :json => @note }
    end
  end

  def new
    @note = Note.new
  end

  def edit
  end

  def create
    @note = Note.new(note_params)

    if @note.save
      redirect_to @note
    else
      render :action => :new
    end
  end

  def update
    if @note.update(note_params)
      redirect_to @note
    else
      render :action => :edit
    end
  end

  def destroy
    @note.destroy
		redirect_to notes_url
  end

  private
    def set_note
  		@note = Note.find(params[:id])
  	end

  	def note_params
  		params.require(:note).permit(:body)
  	end

end
