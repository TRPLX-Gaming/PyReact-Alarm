const timm = ()=>{
	let ctr = 0
	let max = 20
	const formatter = Intl.DateTimeFormat('en-US',{
		hour:'2-digit',
		minute:'2-digit',
		second:'2-digit',
		hour12:false
	})

	let timerId = setInterval(()=>{
		let currentDate = new Date()
		console.log(formatter.format(currentDate))
		ctr++
		if(ctr === max) {
			clearInterval(timerId)
			return
		}
	},1000)

}

timm()
