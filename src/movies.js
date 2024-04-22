// Iteration 1: All directors? - Get the array of all directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
return moviesArray.map(movie => movie.director);
}

// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
function getAllDirectors(moviesArray) {
   const directorsArray = moviesArray.map(movie => movie.director);
    
    const uniqueDirectorsSet = new Set(directorsArray);
    
    const uniqueDirectorsArray = Array.from(uniqueDirectorsSet);
    
    return uniqueDirectorsArray;
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {}

function howManyMovies(moviesArray) {
  const stevenSpielbergDramas = moviesArray.filter(movie => 
        movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
   return stevenSpielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const totalSum = moviesArray.reduce((sum, movie) => sum + movie.score, 0);

    const averageScore = totalSum / moviesArray.length;
    
    const roundedAverage = averageScore.toFixed(2);
    
    return Number(roundedAverage);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaMovies = moviesArray.filter(movie => movie.genre.includes("Drama"));
    
    const totalScore = dramaMovies.reduce((sum, movie) => sum + movie.score, 0);
    
    const averageScore = totalScore / dramaMovies.length;
    
    const roundedAverage = averageScore.toFixed(2);
    
    return Number(roundedAverage);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const moviesCopy = [...moviesArray];
   moviesCopy.sort((a, b) => {
        if (a.year < b.year) return -1;
        if (a.year > b.year) return 1;
        
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        
       return 0;
    });
    
    return moviesCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
   const moviesCopy = [...moviesArray];
    
    moviesCopy.sort((a, b) => a.title.localeCompare(b.title));
    
    const titlesArray = moviesCopy.map(movie => movie.title);
    
    return titlesArray.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
const moviesCopy = moviesArray.map(movie => ({ ...movie }));
    function convertDurationToMinutes(duration) {
            let totalMinutes = 0;
            const parts = duration.split(' ');
        
            for (const part of parts) {
                if (part.includes('h')) {
                    const hours = +part.replace('h', '');
                    totalMinutes += hours * 60;
                } else if (part.includes('min')) {
                    const minutes = +part.replace('min', '');
                    totalMinutes += minutes;
                }
            }
            return totalMinutes;
        }
moviesCopy.forEach(movie => {
        if (movie.duration) {
            movie.duration = convertDurationToMinutes(movie.duration);
        }
    });
    return moviesCopy;


        moviesCopy.forEach(movie => {
            if (movie.duration) {
                movie.duration = convertDurationToMinutes(movie.duration);
            }
        });
    
    return moviesCopy;
    }
    

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    const yearScores = {};

    moviesArray.forEach(movie => {
        const year = movie.year;
        const score = movie.score;

       yearScores[year].totalScore += score;
        yearScores[year].movieCount += 1;
    });

    let bestYear = null;
    let bestAverageScore = 0;

    for (const year in yearScores) {
        const averageScore = yearScores[year].totalScore / yearScores[year].movieCount;

        if (averageScore > bestAverageScore || (averageScore === bestAverageScore && year < bestYear)) {
            bestYear = year;
            bestAverageScore = averageScore;
        }
    }
 return `The best year was ${bestYear} with an average score of ${bestAverageScore.toFixed(1)}`;
}