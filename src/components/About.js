import React from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark' ? 'rgba(36 74 104)' : 'white'
    }

    return (
        <>
            <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
                <h1 className='my-2'>About Us</h1>
                <div className="accordion" id="accordionExample" style={myStyle}>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong> Analyze Your Text </strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Textutils offers a powerful and efficient way to analyze your text. Whether you need to count words, characters, convert text to uppercase or lowercase, or even have your text read aloud, 
                                Textutils has you covered. You can also easily clear or stop the text-to-speech functionality. Enhance your text processing experience with Textutils!
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong> Free To Use </strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Text Counter is a free character count tool that provides instant character and word count statistics for any given text. Textutils reports the number of words and characters,
                                making it perfect for writing within specific word or character limits.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong> Browser Compatible </strong> 
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                This Word Counter software works seamlessly in any web browser, including Chrome, Firefox, Internet Explorer, Safari, and Opera. 
                                It is perfect for counting characters and words in various formats, such as Facebook posts, blogs, books, Excel documents, PDF documents, essays, and more.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
