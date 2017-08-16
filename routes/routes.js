var express=require('express');
var router=express.Router();
var moviesJSON=require('../movies.json');



router.get('/',function(req,res)
{
  var movies=moviesJSON.movies;
res.render('home',{title:'star war movies',
movies:movies});
}
);




router.get('/movies/:episode_number',function(req,res)
{
  var episode_number=req.params.episode_number;
    var movies=moviesJSON.movies;

    if(episode_number>=1 && episode_number<=6)
    {
    var movie=movies[episode_number-1];
    var title=movie.title;
        movie_characters=movie.main_characters;
    res.render('single_movies',

  {
    movie:movie,
    movie_characters:  movie_characters,
  title:title
  });
  }

  else {
    res.send("This is not the page you are looking");
  }
  }

);


module.exports=router;
