class Nbaplay
    def self.play_by_play_parsing(game_id, first_quarter,end_quarter)
      pbp = NBA::PlayByPlay.get_plays_for_game(game_id,first_quarter,end_quarter)
      data = {}
      pbp["resultSets"][0]["rowSet"].each do |play|
        if !play[14].nil?
          if data.key?(play[14])
            data[play[14]] += 1
          else
            data[play[14]] = 1
          end
        end
      end
      data
    end
end

