

// for item in *.*; do

// mkdir -p music
// mkdir -p images
// mkdir -p videos

// if [[ $item == *.mp3 ]] || [[ $item == *.flac ]];then
//     mv -- "$item" "music/"
// fi

// if [[ $item == *.jpg ]] || [[ $item == *.png ]];then
//     mv -- "$item" "images/"
// fi

// if [[ $item == *.avi ]] || [[ $item == *.mov ]];then
//     mv -- "$item" "videos/"
// fi

// if [[ $item == *.log ]];then
//     rm "$item"
// fi


// done

// declare -i sum=0
// read x 
// for i in $x
//     do
//         sum+="${i#-}"
//     done
// echo $sum