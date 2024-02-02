import './Text.css';
import Button from './Button';
import { useState } from 'react';


function Text() {
    const [clickedButton, setClickedButton] = useState(null);

    const handleLinkClick = () => {
        setClickedButton('Link');
      };

      const handleButtonClick = () => {
        setClickedButton('Button');
      };

    return(
        <div className="content">
            <div className="content__box">
            <p>
            Black panther, colloquial term used to refer to large felines classified in the genus Panthera that are characterized by a coat of black fur or large concentrations of black spots set against a dark background. The term black panther is most frequently applied to black-coated leopards (Panthera pardus) of Africa and Asia and jaguars (P. onca) of Central and South America; Black panther, colloquial term used to refer to large felines classified in the genus Panthera that are characterized by a coat of black fur or large concentrations of black spots set against a dark background. The term black panther is most frequently applied to black-coated leopards (Panthera pardus) of Africa and Asia and jaguars (P. onca) of Central and South America; Black panther, colloquial term used to refer to large felines classified in the genus Panthera that are characterized by a coat of black fur or large concentrations of black spots set against a dark background. The term black panther is most frequently applied to black-coated leopards (Panthera pardus) of Africa and Asia and jaguars (P. onca) of Central and South America; Black panther, colloquial term used to refer to large felines classified in the genus Panthera that are characterized by a coat of black fur or large concentrations of black spots set against a dark background. The term black panther is most frequently applied to black-coated leopards (Panthera pardus) of Africa and Asia and jaguars (P. onca) of Central and South America;
            </p>
            <p>Click on this<Button type="button" visual="link" onClick={handleLinkClick}>link</Button>for futher info.</p>
            </div>
            <div className="content__box">
            <p>
            Black panther, colloquial term used to refer to large felines classified in the genus Panthera that are characterized by a coat of black fur or large concentrations of black spots set against a dark background. The term black panther is most frequently applied to black-coated leopards (Panthera pardus) of Africa and Asia and jaguars (P. onca) of Central and South America; Black panther, colloquial term used to refer to large felines classified in the genus Panthera that are characterized by a coat of black fur or large concentrations of black spots set against a dark background. The term black panther is most frequently applied to black-coated leopards (Panthera pardus) of Africa and Asia and jaguars (P. onca) of Central and South America; Black panther, colloquial term used to refer to large felines classified in the genus Panthera that are characterized by a coat of black fur or large concentrations of black spots set against a dark background. The term black panther is most frequently applied to black-coated leopards (Panthera pardus) of Africa and Asia and jaguars (P. onca) of Central and South America; Black panther, colloquial term used to refer to large felines classified in the genus Panthera that are characterized by a coat of black fur or large concentrations of black spots set against a dark background. The term black panther is most frequently applied to black-coated leopards (Panthera pardus) of Africa and Asia and jaguars (P. onca) of Central and South America;
            </p>
            <p><Button type="button" visual="button" onClick={handleButtonClick}>Subscribe</Button> for futher info.</p>
            </div>

            <p className="button__desc">Clicked Button: {clickedButton}</p>
           
        </div>
    );
}

export default Text;