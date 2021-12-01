import styled from "@emotion/styled";

export const Button = styled.button`
  display: inline-block;
  width: 30%;
  border-width: 0;
  line-height: 40px;
  border-radius: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  text-transform: uppercase;
  font-size: 14px;
  background-color: antiquewhite;
  cursor: pointer;
`;

export const List = styled.ul`
  list-style: none;
  max-width: 400px;
  padding: 40px 50px;
  margin: 50px auto 0;
  background-color: gainsboro;
`;

export const Name = styled.p`
  display: block;
  padding: 0 15px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 14px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  border-radius: 20px;
  margin-bottom: 10px;
  background: rgba(255, 255, 255, 0.2);
`;


// .............................................
// export const Container = styled.div`
//     text-align: center;
//     width: 500px;
    
//   overflow: hidden;
//   border: 1px solid #dadce0;
//   border-radius: 12px;
//   margin: auto;


// export const Title = styled.h2`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 50px;
//     color: black;
// `;

// export const List = styled.ul`
//     list-style-type: none;
    
//     margin: 0;
//     padding: 0;  
// `;

// export const ListItem = styled.li`
//     height: 85px;
// `;

// export const ListLink = styled.span`
//     margin: 0 auto;
//       display: flex;
//       text-align: center;
//       justify-content: space-between;
//       align-items: center;
//       width: 100%;
//       height: 100%;
//       text-decoration: none;
//       border-top: 1px solid #dadce0;
   
// `;
