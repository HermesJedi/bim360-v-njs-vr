/////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Forge Partner Development 
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////

'use strict'; // http://www.w3schools.com/js/js_strict.asp

module.exports = {

  // Autodesk Forge configuration

  // set enviroment variables or hard-code here
  //credentials: {
  //  client_id: process.env.FORGE_CLIENT_ID || '<replace with your consumer key>',
  //  client_secret: process.env.FORGE_CLIENT_SECRET || '<replace with your consumer secret>',
  //},

    // Desarrollo localmente
  //  credentials: {
  //      client_id: process.env.FORGE_CLIENT_ID || 'h3EN9MRvwuIzTE3rGW7AjbaUqXjKu8G0',
  //    client_secret: process.env.FORGE_CLIENT_SECRET || 'qbFDeAL10RnA2A5z',
  //},

    //// this this callback URL when creating your client ID and secret
    //callbackURL: process.env.FORGE_CALLBACK_URL || 'http://localhost:3000/api/forge/callback/oauth',

    // Produccion Heroku
    credentials: {
        client_id: process.env.FORGE_CLIENT_ID || 'lsX36nZDKsS5O844yIIOAaGJ8vODRqDQ',
        client_secret: process.env.FORGE_CLIENT_SECRET || 'vYErFAmHvCQuUnrG',
    },

    // this this callback URL when creating your client ID and secret
    callbackURL: process.env.FORGE_CALLBACK_URL || 'https://bim360-v-njs-vr.herokuapp.com/api/forge/callback/oauth',

  // Required scopes for your application on server-side
  scopeInternal: ['data:read','data:write','data:create','data:search'],
  // Required scope of the token sent to the client
  scopePublic: ['viewables:read'],
};