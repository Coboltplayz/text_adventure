/*This is the main function of the whole story */
var story;
function getStory(name) {
	return { /*Pretty self explanatory.*/ /**/ /*Events: */ /*<-For copy*/ /*Bookmarked events are the different story lines*/
	currentScene: "beginning", /*This is always the current scene. It changes when you click or choose choices.*/
	beginning: { /*Events: enter, enterMOD1, and exit*/
		title: "A DARK PLACE", /*HAhah no spoilers, but you've been here before.*/
		story: `Hello ${name}, you wake up in a very dark world, and it seems that the space below you can be stepped on. . .You can't exactly see what's below you but for all you know at least you can walk, right? You see a speck of light in the distance. . .It seems to be pulling you in. . .Will you run away from it? Or will you run towards it?`,
		image: "enter_pic.png", /*I'll improve this once I have a better picture.*/
		choices: [
		{
			choice: "I'll walk, not run towards it. . .",
			destination: 'enter'
		},
		{
			choice: "I'll run towards it!", /*HAhaha, modified. . .Always get me everytime.*/
			destination: 'enterMOD1'
		},
		{
			choice: "Uhm, I'll think I'll run away from it. . .", /*You can't really run away, MWaha.*/
			destination: 'exit'
		}
		]
	},
	enter: { /*Events: enter2 and exit2*//*when you go into the light in beginning*/
		title: 'ENTERING INTO THE UNKNOWN',
		story: `You walk towards it, it seems to be pulling you inside. . .The moment you touched it you saw a bright flash of light and then you disappeared.`,
		image: "enter_pic.png",
		choices: [
		{
			choice: "Now what?",
			destination: 'enter2'
		},
		{
			choice: "Can't I go back?",
			destination: 'exit2'
		}
		]
	},
	enterMOD1: { /*Events: enter2MOD3, exit2MOD1*//*When you choose to run towards it in the beginning*/
		title: 'RUNNING IN BLIND', /*HAhahaha rustage reference.*/
		story: `Having a brave soul and adventurous mind, you run towards it, it seems to be pulling you inside. . .The moment you touched it you saw a bright flash of light and then you start to <strong><i>dissipate</i></strong>.`,
		image: "enter_pic.png",
		choices: [
		{
			choice: "Yeah, Yeah, Yeah. . .Wait, now what?",
			destination: 'enter2MOD3'
		},
		{
			choice: "Can't I do it again?",
			destination: 'exit2MOD1'
		}
		]
	},
	enterMOD2: { /*Events: enter2MOD3 and exit2MOD1*//*When you do it again from exit2MOD1*/
		title: 'RUNNING IN BLIND, FIGHTING OUT MY MIND', /*HAhahaha rustage reference.*/
		story: `You try to get back away from the blinding light. You escaped though, your body returns to normal, and you run back in. It feels weird being broken down into pieces. . .`,
		image: "enter_pic.png",
		choices: [
		{
			choice: "Ok, now what?",
			destination: 'enter2MOD3'
		},
		{
			choice: "Can't I do it again?",
			destination: 'exit2MOD1'
		}
		]
	},
	exit: { /*Events: enter*//*When you run away from beginning*/
		title: "AVOIDING THE UNKNOWN",
		story: `You <i>run away</i> from it instead. . .You keep on running, you keep getting further away from it. Now you only see a <i>miniscule</i> speck of light, only darkness awaits behind. You don't want to stay here right? I promise, things will get interesting, just go in there. . .Don't be afraid of the <strong>"UNKNOWN"</strong>. . .`,
		image: "enter_pic.png",
		defaultDestination: 'enter',
		buttonText: "Guess I'll walk towards it then. . ."
		},
	enter2: { /*Events: enter3 and exit3*//*When you accept your fate in enter*/
		title: 'NOW WHAT???',
		story: `Now ${name}, you really wake up from a comfy bed. . .You are in a small wooden house, this house seems familiar. . .You see nothing but your bed with your pillow, a wooden table and a wooden door. You see a weird machine that looks like a watch that is on top of the table, it's ticking very softly. . .Do you want to keep it before you walk outside the door? You do have pockets in your pants~`,
		image: "house1_pic.png",
		choices: [
		{
			choice: "I think I'll keep it. . .",
			destination: 'enter3'
		},
		{
			choice: "Nah, I don't want to meddle with such things. . .",
			destination: 'exit3'
		}
		]
	},
	enter2MOD1: { /*Events: enter2MOD2 and exit3MOD1*//*Time travel Scene.*/
		title: 'NOW WHAT?',
		story: `Now ${name}, you are standing besides a comfy bed. . .You are in a small wooden house, this house seems familiar. . .You see nothing but your bed with your pillow, a wooden table and a wooden door. Do you still want to stay here? You can go outside if you want.`,
		image: "house1_pic2.png",
		choices: [
		{
			choice: "I want to stay here, I have gone through a lot. . .",
			destination: 'enter2MOD2'
		},
		{
			choice: "Guess I'll go outside. . .",
			destination: 'exit3MOD1'
		}
		]
	},
	enter2MOD2: { /*Events: enter2MOD2 and exit3Mod*//*Time travel scene events*/
		title: 'ARE YOU HIDING FROM THE UNKNOWN?',
		story: `Now ${name}, you stayed with your comfy bed. . .A few hours pass. . .You feel very hungry and tired. . .Do you still want to stay here? You can go outside if you want.`,
		image: "house1_pic2.png",
		choices: [
		{
			choice: "I want to stay here, I have gone through a lot. . .",
			destination: 'enter2Mod2'
		},
		{
			choice: "Guess I'll go outside. . .",
			destination: 'exit3Mod'
		}
		]
	},
	enter2MOD3: { /*Events: enter3 and exit3*//*Rustage reference in enterMOD1,*/
		title: 'HOT AND SWEET, NO CAPPUCINO',
		story: `Now ${name}, you really wake up from a comfy bed. . .You are in a small wooden house, this house seems familiar. . .You see nothing but your bed with your pillow, a wooden table and a wooden door. You see a weird machine that looks like a watch that is on top of the table, it's ticking softly. . .Do you want to keep it before you walk outside the door? You do have pockets in your pants~`,
		image: "house1_pic.png",
		choices: [
		{
			choice: "I think I'll keep it. . .",
			destination: 'enter3'
		},
		{
			choice: "Nah, I don't want to meddle with such things. . .",
			destination: 'exit3'
		}
		]
	},
	enter2MOD4: { /*Events: enter3 and exit3*//*When you repeat the process over and over in enterMOD1*/
		title: 'OUT OF ENERGY',
		story: `Now ${name}, because you <i>ran</i> a couple of times now, you feel really tired but you try to open your eyes and wake up from a comfy bed. . .You are in a small wooden house, this house seems familiar. . .You see nothing but your bed with your pillow, a wooden table and a wooden door. You see a weird machine that looks like a watch that is on top of the table, it's ticking softly. . .Do you want to keep it before you walk outside the door? You do have pockets in your pants~`,
		image: "house1_pic.png",
		choices: [
		{
			choice: "I think I'll keep it. . .",
			destination: 'enter3'
		},
		{
			choice: "Nah, I don't want to meddle with such things. . .",
			destination: 'exit3'
		}
		]
	},
	exit2: { /*Events: enter2*//*When you don't want to enter the portal*/
		title: 'FEAR KICKS IN',
		story: `Do you really want to go back? Now, now ${name} you can't go back anymore. . .I know that you would want to follow the light. . .But if you want you can change your name? Nah. . .I don't think that's possible ${name}. . .Just let it go, see you on the FLIPSIDE!`,
		defaultDestination: 'enter2',
		buttonText: "Alright then. . ."
	},
	exit2MOD1: { /*Events: enterMOD2 and enter2MOD4*//*If you want to run in again*/
		title: 'YEAH YOU CAN!',
		story: `Hey ${name}! You wanna do that <i>again!?</i> Ok <strong>DO IT!</strong>`,
		choices: [
		{
			choice: "I'll do it again! That was weird and fun!",
			destination: 'enterMOD2'
		},
		{
			choice: "I did that like a couple of times now. . .I wanna get out of here",
			destination: 'enter2MOD4'
		}
		]
	},
	enter3: { /*Events: backlook*/ /*You take the machine from the enter2 's*/
		title: 'THE BEGINNING',
		story: `You take the watch. . .There seems to be something written at the back of it. . .`,
		image: "time_machine_pic.png",
		defaultDestination: 'backlook',
		buttonText: "FLIP"
	},
	enter3MOD1: { /*Events: backlook and enter3Finished*//*When you want to read it again at backlook*/
		title: 'THE BEGINNING?',
		story: `You flip the watch over. . .You have already read what it says at the back of it. . .`,
		image: "time_machine_pic.png",
		choices: [
		{
			choice: "I want to read the back of it <i>again</i>",
			destination: 'backlook'
		},
		{
			choice: "Ok, I'm done here. . .",
			destination: 'enter3Finished'
		}
		]
	},
	backlook: { /*Events: enter3Finished and enter3MOD1*//*Events: You read the back at enter3*/
		title: 'BACK OF THE "WATCH"',
		story: `    `,
		image: "time_machine_back_pic.png",
		choices: [
		{
			choice: "I'm done taking a look, let's go.",
			destination: 'enter3Finished'
		},
		{
			choice: "I want to see the front view of this <i>machine</i>",
			destination: 'enter3MOD1'
		}
		],
		buttonText: 'FLIP'
		
	},
	enter3Finished: { /*Events: enter4 and optional*//*When you finish taking a look at the watch on backlook*/
		title: 'THE BEGINNING',
		story: `You finally realize that this is really a time travelling machine! Now ${name} you have the ability to get back in time! Now you have an additional choice to travel into the future or travel back to the past. . .Though be careful on what you do. . .Time traveling back to the very beginning or the very end will have some very dire consequences, and maybe you'll lose your time traveling machine. . .Now will you walk through the door? Or will you experiment with your time travelling machine instead?`,
		image: "time_machine_pic.png",
		choices: [
		{
			choice: "I guess I'll walk through the door, I have seen enough.",
			destination: 'enter4'
		},
		{
			choice: "I'll check it out first!",
			destination: 'optional'
		}
		]
	},
	exit3: { /*Events: enter3 and story2beginning*//*If you don't want to take the time machine in enter3*/
		title: "AVOIDING THE OBVIOUS",
		story: `Hmm, you sure? What if I told you. . .That is a time machine?`,
		choices: [
		{
			choice: "I think I'll keep it. . .",
			destination: 'enter3'
		},
		{
			choice: "Nah, I hate complex stuff, and that's not mine in the first place. . .",
			destination: 'story2beginning'
		}
		]
	},
	exit3MOD1: { /*Events: exit4, enter2MOD1 and time*//*From enter2MOD1*/
		title: "HEADING OUT",
		story: `You gently open the door, with your time machine in hand, you feel INVINCIBLE. As you walk outside the door you seem to be in a rural area. . .Grass and vegetation for as far as the eye can see. . .You can see a way out of this forest. Do you want to go outside? Or do you want to stay here?`,
		image: "openeddoor_pic.png",
		choices: [
		{
			choice: "I guess I'll go outside. . .",
			destination: "exit4"
		},
		{
			choice: "I don't want to go outside. . .Everything seems suspicious.",
			destination: "enterMOD1"
		},
		{
			choice: "I want to timetravel.",
			destination: 'time'
		}
		]
	},
	enter4: { /*Events: optional and enter5*//*From enter3Finished*/
		title: "NO CRASH COURSE?",
		story: `It is recommended you try it first! Well, you can exit this house if you don't want any delays. . .`,
		image: "openingdoor_pic.png",
		choices: [
		{
			choice: "Uhm, ok. . .",
			destination: 'optional'
		},
		{
			choice: "No, thank you, I already tested that out.",
			destination: 'enter5'
		}
		]
	},
	optional: { /*Events: timeTravelTest*//*from enter3Finished*/
		title: 'TESTING',
		story: `You test it out! You press the button on top but you kicked the table breaking one of it's fragile legs, making the table wobble and lie broken on the floor, then suddenly the numbers inside the clock change into pressable buttons. . .`,
		image: "brokentable_pic.png",
		defaultDestination: 'timeTravelTest',
		buttonText: "TIME TRAVEL"
	},
	timeTravelTest: { /*Events: enter3Finished*/ /*From: optional*/
		title: 'NOW WHA- WAIT, WHAT???',
		story: `Now ${name}, you stand up from a comfy bed. . .You are in a small wooden house, this house seems familiar. . .You see nothing but your bed with your pillow, a wooden table and a wooden door. You hold a weird machine that looks like a watch, it's ticking very softly. . .`,
		image: "house1_pic2.png",
		defaultDestination: 'enter3Finished',
		buttonText: "Alright, I'm getting the hang of this."
		},
	enter5: { /*Events: exit4, enter2MOD1 and time*//*From: enter4*/
		title: 'THE DOOR CREAKS OPEN',
		story: `You gently open the door, making it creak a little bit while you're opening it, with your time machine in hand, you feel <strong>INVINCIBLE</strong>. As you walk outside the door you seem to be in a rural area. . .Grass and vegetation for as far as the eye can see. . .You can see a way out of this forest. Do you want to go outside?`,
		image: "openeddoor_pic.png",
		choices: [
		{
			choice: "I guess I'll go outside. . .",
			destination: "exit4"
		},
		{
			choice: "I don't want to go outside. . .Everything seems <i>suspicious</i>.",
			destination: "enter2Mod1"
		},
		{
			choice: "I want to timetravel.",
			destination: 'time'
		}
		]
	},
	exit4: { /*Events: exit5, enter7, story3beginning and time*//*From: enter5*/
		title: 'VENTURING INTO THE OUTDOORS',
		story: `You walk out the door, and forget to <i>close</i> it. As you walk down the path, you see an <i>old man</i> walking the same way as you but barefooted, wearing ragged clothes and a tophat that seem to camouflage with the road, and he's also walking very slowly as if he is about to <i>faint</i>. He seems <i>suspicious</i> though, it seems he's got <i>something</i> in his hand. . .Will you approach him?`,
		image: "pathwitholdman_pic.png",
		choices: [
		{
			choice: "I'll stay away from him, he seems pretty suspicious.",
			destination: 'exit5'
		},
		{
			choice: "I'll help him, I think He's gonna faint.",
			destination: 'enter7'
		},
		{
			choice: "I think I'll beat him up, or hit him or something. . .",
			destination: 'story3beginning'
		},
		{
			choice: "I want to time travel.",
			destination: 'time'
		}
		]
	},
	exit4Mod: { /*Events: */
		title: 'Venturing into the Forest',
		story: `You just came from <i>another timeline</i>. As you walk down the path, you see an old man walking barefooted wearing ragged clothes and a top hat that seems to camouflage with the road, and he's also walking very slowly as if he is about to <i>faint</i>. He seems suspicious though, it seems he's got <i>something</i> in his hand. . .Will you approach him?`,
		image: "pathwitholdman_pic.png",
		choices: [
		{
			choice: "I'll stay away from him, he's very suspicious.",
			destination: 'exit5'
		},
		{
			choice: "I'll help him, I think he's gonna faint.",
			destination: 'enter7'
		},
		{
			choice: "I want to time travel.",
			destination: 'time'
		}
		]
	},
	exit5: {
		title: 'Avoiding the Unknown',
		story: `You avoided the old man, you quicken up your pace and you overtake the old man. It feels like he's still watching you. After walking a large amount of distance you see a house at the end of the road. It looks very familiar because it looks exactly like the other house you've just been in, there's a road behind it but you're really hungry and thirsty. Would you enter it, to get some food and water? Or with you travel beyond the house and look for more to discover?`,
		image: "pathhouse2_pic.png",
		choices: [
		{
			choice: "I think I'll skip the house, I don't want to bother anybody living there. . .",
			destination: 'exit6'
		},
		{
			choice: "I'll check out the house, I want to get atleast something.",
			destination: 'enter8'
		},
		{
			choice: "I want to time travel.",
			destination: 'time'
		}
		]
	},
	exit5Mod: {
		title: 'Avoided the Unknown',
		story: `You have just avoided the old man behind you. It feels like he's still watching you. After walking a large amount of distance you see a house at the end of the road. It looks very familiar because it looks exactly like the other house you've just been in, there's a road behind it but you're really hungry and thirsty. Would you enter it, to get some food and water? Or with you travel beyond the house and look for more to discover?`,
		image: "pathhouse2_pic.png",
		choices: [
		{
			choice: "I think I'll skip the house, I don't want to bother anybody living there. . .",
			destination: 'exit6'
		},
		{
			choice: "I'll check out the house, I want to get atleast something.",
			destination: 'enter8'
		},
		{
			choice: "I want to time travel.",
			destination: 'time'
		}
		]
	},
	time: {
		title: 'TIME TRAVELING',
		story: `What part of the timeline do you want to visit? Once you timetravel, any timeline you visit, is a world without you. It seems that time travelling is really complex and I have no explanations on why you don't exist on any time you go to, maybe it's because of the machine? Anyway, all choices with a big T with them means time travelling there is safe, you won't die or lose your time machine.`,
		image: "time_machine_pic.png",
		choices: [
		{
			choice: "I would like to return to the time when I was surrounded by darkness. . .",
			destination: 'beginning'
		},
		{
			choice: "I would like to return to the time when I tried to get out of the darkness. . .",
			destination: 'exit'
		},
		{
			choice: "I would like to return to the time when I spawned at the first house.(T)",
			destination: 'enter2MOD1'
		},
		{
			choice: "I would like to return to the time when I first discovered the time machine.(T)",
			destination: 'enter3Finished'
		},
		{
			choice: "I would like to go back when I first tested this thing out.(T)",
			destination: 'optional'
		},
		{
			choice: "I would like to return to the time when I first found the shaggy old man.(T)",
			destination: 'exit4MOD1'
		},
		{
			choice: "I would like to return to the time when I first discovered the second house.(T)",
			destination: 'exit5MOD1'
		}
		]
	},
	story2beginning: { /*STORY 2, this is the division of STORY 1 from STORY 2*/
		title: 'ANOTHER PATH',
		story: `You didn't take the time machine. You feel so free! Now what to do. . .Ah! you can leave the house now!`,
		image: "house1_pic.png",
		choices: [
		{
			choice: "Yeah! I'll get out of here!",
			destination: 'story2enter1'
		},
		{
			choice: "On second thought, let me take that time machine. . .I want to time travel. . .",
			destination: 'enter3'
		},
		{
			choice: "I think I'll stay here. . .Let me take a <i>nap</i>.",
			destination: 'story2exit1'
		}
		]
	},
	story2enter1: {
		
	},
	story3beginning: { /*STORY 3, this is the division of STORY 2 from STORY 3*/
		
	},
	}
}


/*All the most complex functions. THIS IS IMPORTANT, don't delete!*/
document.addEventListener('DOMContentLoaded', function() {
	var button = document.querySelector('#start-button')
	var content = document.querySelector('#content')
	button.addEventListener('click', function() {
		var name = document.querySelector('#name-input')
		story = getStory(name.value)
		renderScene()
	})
})
	
function renderScene(){
	var text = "Next"
	var image = "";
	if (story[story.currentScene].image){
		image = "<img></img>"
	}
		
	if (story[story.currentScene].buttonText) {
		text = story[story.currentScene].buttonText
	}
	content.innerHTML = `
	<h1>${story[story.currentScene].title}</h1>
	<p>${story[story.currentScene].story}</p>
	${image}
	${getInputs()}
	<button id = "submit-button">${text}</button>
	`
	if (story[story.currentScene].image) {
		document.querySelector("img").src = `./img/${story[story.currentScene].image}`
	}
	var button = document.querySelector("#submit-button");
	button.addEventListener('click', function() {
		getInputValue()
	})
}

function getInputValue() {
	var inputs = document.querySelectorAll('input[type="radio"]');
	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].checked) {
			story.currentScene = inputs[i].getAttribute('data-destination')
			renderScene();
			return;
		}
	}
	story.currentScene = story[story.currentScene].defaultDestination
	renderScene()
}

getInputs()
function getInputs() {
	var input = ""
	if (!story[story.currentScene].choices) {
		return ""
	}
	for(var i = 0; i < story[story.currentScene].choices.length; i++) {
		input += `
		<div>
			<input data-destination = ${story[story.currentScene].choices[i].destination} id = "radio${i}" type = "radio" name = "choices" />
			<label for = "radio${i}">${story[story.currentScene].choices[i].choice}</label>
		</div>`
	}
	return input;
}



