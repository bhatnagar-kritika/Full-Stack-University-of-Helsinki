# part0
University of Helsinki | Full Stack

0.4 New Note Diagram

```mermaid
    sequenceDiagram
    participant browser
    participant server

    browser-->server: POST https://studies.cs.elsinki.fi/exampleapp/newnote;
    activate server;
    server-->browser: HTML document;
    deactivate server;

```
