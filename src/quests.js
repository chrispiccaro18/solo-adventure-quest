const tavern = {
    id: 'tavern',
    title: 'Check Out The Local Tavern',
    description: `
        Outside the tavern a man crashes through the front door. His 
        ejector shouts obscenities but leaves the door open. You walk over 
        the drunk's inert body and into the bright light from the dark night.
        You stop in the threshold and scan the room, everone hushes and all 
        eyes fall to you. As quickly as the patrons stopped what they were 
        doing to give you the once-over the tavern returns to chaos.
        What do you do?
    `,
    choices: [{
        id: 'antagonize',
        description: 'These lushes look like easy targets. Punch the nearest sucker!',
        result: `
            After knocking out a most of the fools the proprietor interceeds 
            with a chair to the back of your head. You wake up a few hours 
            later in his office. Despite what you expect he's happy with you. 
            He clears up the confusion by informing you the fools you knocked 
            out are bandits. Although he likes the amount of booze they buy, 
            they've been creating a poor atmosphere. He hopes you sent them a 
            message, clean up your act in this establishment, and he sent them 
            one, we're still friends. You're head hurts, still confused by the 
            owner's explanation, but your coin pouch feels a lighter heavier.
        `,
        hpChange: -10,
        goldChange: 5
    }, {
        id: 'converse',
        description: `
            There's an interesting female elf in the corner still staring at you. 
            Let's go see what she knows...
        `,
        result: `
            She buys you a drink and invites you to sit. You are showered with 
            compliments from her and she offers you in on a deal that sounds too 
            good to be true. Your eyes feel heavy and the last thing you see is 
            the elf smiling from cheek to cheek. You wake up in the alleyway 
            thankful to still have your clothes. Your stomach burns for the next 
            few days while you think of a better story to tell your friends. A 
            night you could never forget if you could only remember it...
        `,
        hpChange: -5,
        goldChange: -10
    }, {
        id: 'drink',
        description: 'Buy a drink. See if you can get some information from the bartender',
        result: `
            He talks your ear off about the gossip around town. The blacksmith 
            is missing his daughter, bandits around town, and the manure the 
            town uses is running low (but it still smells terrible). Fortunately 
            the drinks are good. After a few you call it a night.
        `,
        hpChange: 0,
        goldChange: -5
    }]
};

const quests = [tavern];

export default quests;