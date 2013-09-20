{-# LANGUAGE OverloadedStrings #-}
module Storage (server) where

import           Data.String
import           Data.Maybe
import           Control.Monad

import           LIO
import           Hails.HttpServer.Types
import           Hails.Web
import qualified Hails.Web.Frank as Frank

server :: Application
server = mkRouter $ do
  Frank.get "/:id" $ do
    endPt <- fromMaybe "" `liftM` queryParam "id"
    return $ okHtml $ fromString $ concat
      [ "<!DOCTYPE HTML>"
      , "<html>"
      , "  <head> "
      , "    <title>PwdManager - Untrusted password manager</title>"
      , "    <meta charset=\"utf-8\">"
      , "  </head>"
      , "  <body>"
      , "    <script src=\"/static/js/jquery.min.js\"></script>"
      , "    <script src=\"/static/js/app.js\"></script>"
      , "    <script>"
      , "    app({ username :" ++ show username
      , "        ,  password :" ++ show password
      , "        }, atob(" ++ show endPt ++")"
      , "       );"
      , "    </script>"
      , "    Got encrypted login info!"
      , "  </body>"
      , "</html>"
      ]
      where username = "deian"
            password = "w00t"
