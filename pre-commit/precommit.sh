echo "Compressing JS Files"

suffix=""

for file in ../scripts/*.js; do suffix="$suffix--js $file " ; done

echo $suffix

java -jar google-closure/closure-compiler.jar $suffix --js_output_file ../scripts.min.js