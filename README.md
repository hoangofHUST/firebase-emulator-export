# FIREBASE EMULATOR IMPORT/EXPORT ISSUE

## Environment Config

- OpenJdk
    ```
    # Ubuntu, Debian
    $ sudo apt-get install openjdk-8-jre

    # MacOs
    use installer file at link https://www.oracle.com/java/technologies/javase-jdk14-downloads.html
    ```
- Firebase-tools
    ```
    #npm
    $ npm i -g firebase-tools
    ```
- Repository
    ```
    $ cd path-to-emulator-demo/
    $ npm i
    ```
## Export doesnt work like expectation

- Start emulator
    ```
    $ cd path-to-emulator-demo/
    $ firebase emulators:start --only firestore --project default
    ```
- Start server and change firestore data use api
    ```
    $ cd path-to-emulator-demo/
    $ npm start

    # get all documents GET /get-all
    # create new document POST /
    # get document with id GET /$document-id
    # delete document with id DELETE /$document-id
    ```
- Export from emulator
    ```
    $ cd path-to-emulator-demo/
    $ firebase emulators:export [$dir] --project default
    ```
- Restart emulator and import data
    ```
    $ cd path-to-emulator-demo/
    $ firebase emulators:start --only firestore --import [$dir] --project default
    ```

    Now use GET `/get-all` to see what in firestore. Unfortunately nothing in firestore

I prepare a export folder named `seed`. Now you can import it to emulator then change data use api above. After changing data of firestore, you can export to another folder then restart emulator to import from new folder. When you check what is in firetore, amazing, nothing is different from firestore import by `seed` folder