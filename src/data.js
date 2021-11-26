const variable = {
    visible: true,
    type: 0,

    // for if it's visible
    xPos: 0,
    yPos: 0,

    // for sliders
    sliderPos: 250,
    sliderMin: 0,
    sliderMax: 500,

    value: ""
}

const list = {
    // lists have much of the same code as variables
    visible: true,

    // for if it's visible
    xPos: 0,
    yPos: 0,

    value: []
}

export { variable, list };