var index = 0;

function changeColors(){
    var colors=["red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow","red","blue","orange","pink","aqua","green","yellow",];
document.getElementsByTagName("body")[0].style.background=colors[index++];

if (index > colors.lenght - 1){
index = 0;
}
} 