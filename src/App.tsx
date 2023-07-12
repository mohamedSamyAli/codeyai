import React, { useState, useEffect, useCallback, useRef } from 'react';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './routes';
const App = () => {
  return (<>
    <RouterProvider router={router}   />
  </>)
};

export default App;





