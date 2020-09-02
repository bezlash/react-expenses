import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// const withAdminWarning = (WrappedComponent) => {
//   return (props) => (
//     <div>
//       <p>This is priveleged information.</p>
//       <WrappedComponent {...props} />
//     </div>
//   );
// };

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login to see this component</p>}
     
    </div>
  );
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo info="Something" />, document.getElementById('app'));

ReactDOM.render(<AuthInfo isAuthenticated={true} info="Something" />, document.getElementById('app'));