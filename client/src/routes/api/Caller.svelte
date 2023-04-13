<script>
	const getRandomUser = async () => {
		var response = await fetch('https://randomuser.me/api/');
		var result = await response.json();
		return result;
	}
	
	let userPromise = getRandomUser();
</script>

<div class="container">
    <img id="selector" alt='btc' src="https://media.tenor.com/pMhSj9NfCXsAAAAd/saul-goodman-better-call-saul.gif"/>
    <div class="centered">
        {#await userPromise}
            <h2>loading...</h2>
        {:then users}
            <h2>{users.results[0].name.first + " " + users.results[0].name.last}</h2>
            <h2>{users.results[0].location.street.name + " " + users.results[0].location.street.number + ", " + users.results[0].location.city + " " + users.results[0].location.country}</h2>
            <h2>{"LAT: " + users.results[0].location.coordinates.latitude + " LONG:" + users.results[0].location.coordinates.longitude}</h2>
            <h2>{users.results[0].cell}</h2>
            <h2>206.144.226.190</h2>
        {:catch error}
            <h2>error while loading data</h2>
        {/await}

    </div>
</div>

<style>
    h2 {
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        color: rgb(255, 255, 255);
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
    }
    #selector {
        width:100%;
        height:100%;
    }
    .container {
        position: relative;
        text-align: center;
        color: white;
    }
    .centered {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
</style>
