// Web Scrapping using Node js and Cherio Request
// npm install cherio
// npm install request

// Imports 
const cherio = require('cherio');
const request = require('request');
const fs = require('fs');

// Create a Write Stream 
var WriteStream  = fs.createWriteStream("ImagesLink.txt", "UTF-8");



request('https://opensea.io/accounts/beeef.nftpostcard.eth/bastard-gan-punks-v2?search[sortBy]=LAST_TRANSFER_DATE&search[sortAscending]=false', (err, resp, html)=>{

    if(!err && resp.statusCode == 200){
        console.log("Request was success ");
        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);

        $("img").each((index, image)=>{

            var img = $(image).attr('src');
            var baseUrl = 'https://opensea.io/accounts/beeef.nftpostcard.eth/bastard-gan-punks-v2?search[sortBy]=LAST_TRANSFER_DATE&search[sortAscending]=false';
            var Links = baseUrl + img;
            WriteStream.write(Links);
            WriteStream.write("\n");
        });

    }else{
        console.log("Request Failed ");
    }

});
