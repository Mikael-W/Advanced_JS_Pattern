const memoizedAdd = () => {
  let cache = {};
  return (value) => {
    if (value in cache) {
      console.log('fetching from cache');
      return cache[value];
    } else {
      console.log('calculating result');
      let result = value + 10;
      cache[value] = result;
      return result
    }
  }
}

const newAdd = memoizedAdd();
console.log(newAdd(9));
console.log(newAdd(9));

// La mémoïsation est une technique de programmation qui consiste à stocker les résultats des appels à une fonction pour éviter de les recalculer inutilement.
// Lorsque la fonction memoizedAdd est invoquée, elle définit une variable cache qui sera utilisée pour stocker les résultats des calculs. La fonction retourne alors une autre fonction anonyme (aussi appelée closure) qui prend en entrée une valeur.
// Lorsque cette fonction est appelée avec une valeur, elle vérifie si cette valeur se trouve déjà dans le cache en utilisant 
// l'opérateur in. Si la valeur est présente dans le cache, la fonction affiche un message "fetching from cache" et retourne la valeur stockée dans le cache. Si la valeur n'est pas présente dans le cache, la fonction affiche un message "calculating result", calcule la valeur en ajoutant 10 à la valeur d'entrée et stocke le résultat dans le cache.
// Lors de la prochaine invocation de la fonction avec la même valeur, elle réutilisera la valeur stockée dans le cache, ce qui accélère considérablement les performances de la fonction.