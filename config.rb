
# Set this to the root of your project when deployed:
http_path = "/"
css_dir = "target/css"
sass_dir = "src/css"
images_dir = "src/i"
generated_images_dir = "target/i"
http_generated_images_path = "../i"
http_images_path = "target/i"
javascripts_dir = "javascripts"

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
# line_comments = false


# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass

# module Compass::SassExtensions::Functions::Sprites
#   def sprite_url(map)
#     verify_map(map, "sprite-url")
#     map.generate
#     generated_image_url(Sass::Script::String.new(map.name_and_hash))
#   end
# end

# module Compass::SassExtensions::Sprites::SpriteMethods
#   def name_and_hash
#     "sprites/#{path}.png"
#   end

#   def cleanup_old_sprites
#     Dir[File.join(::Compass.configuration.generated_images_path, "sprites/#{path}.png")].each do |file|
#       log :remove, file
#       FileUtils.rm file
#       ::Compass.configuration.run_sprite_removed(file)
#     end
#   end
# end

# module Compass
#   class << SpriteImporter
#     def find_all_sprite_map_files(path)
#       glob = "sprites/*{#{self::VALID_EXTENSIONS.join(",")}}"
#       Dir.glob(File.join(path, "**", glob))
#     end
#   end
# end