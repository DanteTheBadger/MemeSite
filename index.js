var memePos = 0;
function changeMeme() {
    memePos = memePos;
    console.log("Memes!")
    const memeArray = ["https://i.redd.it/gkee3xdcfdz11.png", "https://preview.redd.it/l2pzxryu5gxa1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=c815143b4f4db917c101ad433f51027595e63bc7", "https://preview.redd.it/89t4fkzpunya1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=3c307da07babe609b7032b30b6921644dc70477d", "https://preview.redd.it/p433hvmxi0ya1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=f4254a0f324bb95098de0d9c0efa2464311fb274"];
    memePos += 1;
    if (memePos == 4)
        {
            memePos = 0;
        }
    meme = memeArray[memePos];
    document.getElementById("meme").src = meme;
    document.getElementById("tagline").innerHTML = "How About Now?";
}
