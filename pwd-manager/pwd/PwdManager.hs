{-# LANGUAGE OverloadedStrings #-}
module PwdManager (server) where

import           Data.String
import           Data.Maybe
import           Control.Monad

import           LIO
import           Hails.HttpServer.Types
import           Hails.Web
import qualified Hails.Web.Frank as Frank

server :: Application
server = mkRouter $ do
  Frank.get "/" $ redirectTo "/static/html/main.html"
  {-
  Frank.get "/users" $ do
    req <- request >>= liftLIO . unlabel
    return $ okHtml $ fromString $
      "Welcome to " ++ (show $ serverName req) ++
      "<br/>Go to url: /users/:id/"
  Frank.get "/users/:id" $ do
    userId <- fromMaybe "" `liftM` queryParam "id"
    return $ ok "text/json" $ fromString $
      "{\"myid\": " ++ (show userId) ++ "}"
      -}
