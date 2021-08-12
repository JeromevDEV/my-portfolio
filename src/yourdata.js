// Skills Icons
import videoIcon from "./images/video-editing.svg"
import wordpressIcon from "./images/logo-wordpress.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import twitchIcon from "./images/twitch-icon.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

// Other images 
import pdp from "./pdp.png"
import skeleton from "./skeleton.png"
import sentimentAnalysis from "./sentimentAnalysis.png"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Jérôme",
  headerTagline: [
    //Line 1 For Header
    "Building digital",
    //Line 2 For Header
    "products, brands,",
    //Line 3 For Header
    "and experience",
  ],
  //   Header Paragraph
  headerParagraph:
    "Let's discover and create something amazing together !",

  //Contact Email
  contactEmail: "jeromev.dev@hotmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Sentiment analysis of video comments", //Project Title - Add Your Project Title Here
      para:
		"How we want to extract sentiment of video comments",
      //Project Image - Add Your Project Image Here
      imageSrc:
		sentimentAnalysis,
      //Project URL - Add Your Project Url Here
      url: "https://medium.com/empathic-labs/sentiment-analysis-of-video-comments-29570fd16cd4",
    },
    {
      title: "Skeleton Detection Using a Video", //Project Title - Add Your Project Title Here
      para:
        "How we want to extract emotions from a dancer’s move", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        skeleton,
      //Project URL - Add Your Project Url Here
      url: "https://medium.com/empathic-labs/skeleton-detection-using-a-video-7623f1cc1d42",
    },
    {
      title: "Project Three", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "./",
    },
    {
      title: "Project Four", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "./",
    },
    {
      title: "Project Five", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "./",
    },
    {
      title: "Project Six", //Project Title - Add Your Project Title Here
      para:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      //Project URL - Add Your Project Url Here
      url: "./",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Hi, my name is Jérôme and I'm a Master student at the HES-SO in Switzerland. I graduated from my Bachelor of Science at the HEAI-FR in Switzerland.",
  aboutParaTwo:
    "I like to develop web app and to use new technologies. I'm also very interested in UI/UX and in streaming. I'm actually learning skills on video and image editing",
  aboutParaThree:
    "On my free time I enjoy riding my Ducati SuperSport S, play video games and stream.",
  aboutImage:
    pdp,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: jsIcon,
      para:
        "I always liked JavaScript and I can work and learn a lot of JS based technologies.",
    },
    {
      img: reactIcon,
      para:
        "React is one of my favorite JavaScript library. ",
    },
    {
      img: designIcon,
      para:
        "I love design and trends, I'm still new to UI/UX and I work everyday on getting better !",
    },
    {
      img: codeIcon,
      para:
        "I can code using Java, C++, JS, HTML, SQL.",
    },
	{
      img: videoIcon,
      para:
        "I have huge interest into film making and video editing. I'm actually using Premiere Pro.",
    },
	{
      img: wordpressIcon,
      para:
        "I'm always trying to learn new stuff and actually I'm looking forward to develop websites using WordPress.",
    },	
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  /*promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  */
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/JeromevDEV" },
    {
      img: twitchIcon,
      url: "https://www.twitch.tv/chocoopanda_redangel",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/redangel_driver/?hl=fr",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
