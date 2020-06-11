import React, {
    useState,
    useCallback,
 
  } from 'react';

  import { Container } from './styles';
  
  
  
  
  function Input({...rest}) {
      
      
      const [isFocused, setIsFocused] = useState(false);
    
      const handleInputFocus = useCallback(() => {
        setIsFocused(true);
      }, []);
    
    return (
      <Container
        isFocused={isFocused}
      >
        <input
          onFocus={handleInputFocus}
          {...rest}
        />
  
       
      </Container>
    )
  };
  export default Input;