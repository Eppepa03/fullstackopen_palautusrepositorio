```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: HTTP-status 201
    deactivate server

    Note right of browser: Muita HTTP kutsuja ei suoriteta. JavaScript koodi huolehtii muistiinpanon tallentamisen.
```