
  exports.handler = async event => {
    console.log('event', event);

    return {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials' : true 
        },
        statusCode: 200,
        body: JSON.stringify(roles)
    };
};
const roles=[{
    "name":"Vijay Akash",
    "role":"Web developer",
    "profilePic":"https://i.pinimg.com/originals/4c/2b/c0/4c2bc05eb5e6fa7f0ff5fbad40524981.png",
    "followed":false
  },
  {
    "name":"Umesh",
    "role":"Dev-ops Engineer",
    "profilePic":"https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "followed":false
  },
  {
    "name":"Aditya G",
    "role":"Cloud Engineer",
    "profilePic":"https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    "followed":false
  },
  {
    "name":"Rohan",
    "role":"Front-end Developer",
    "profilePic":"https://i.pinimg.com/originals/80/69/f1/8069f1818633a2a30e61ba2f911b662d.png",
    "followed":false
  },
  {
    "name":"Bharani",
    "role":"Software Developer",
    "profilePic":"https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    "followed":false
  },{
    "name":"Ajay Kumar",
    "role":"Security Expert",
    "profilePic":"https://i.ndtvimg.com/i/2017-06/ajith_640x480_71497888601.jpg",
    "followed":true
  },
  {
    "name":"Sundar Ramaswamy",
    "role":"CEO/Corporate Criminal",
    "profilePic":"https://i4.behindwoods.com/tamil-movies-cinema-news-16/images/sarkar-audio-track-list-vijay-ar-rahman-photos-pictures-stills.jpg",
    "followed":false
  },
  {
    "name":"Pettai Velan",
    "role":"Chief Warden",
    "profilePic":"https://www.behindwoods.com/tamil-movies-cinema-news-16/images/the-official-first-look-motion-poster-of-rajinikanths-pettai-photos-pictures-stills-1.jpg",
    "followed":true
  },
  {
    "name":"Wisam Ahmed Kashmiri",
    "role":"Dancer",
    "profilePic":"https://www.sify.com/uploads/mgijAFcigfisi.jpg?1621624658872",
    "followed":false
  },
  {
    "name":"Anthony Dass",
    "role":"Transport Co-ordinator",
    "profilePic":"https://woodsproduc.s3.amazonaws.com/uploads/item_media/asset/7186/vijay-sethupathi-Soodhu-Kavvum-Movie-still.jpg",
    "followed":true
  }];  
