Zadatak 2
Cilj zadatka je napraviti aplikaciju za kreiranje, edit-ovanje i brisanje post-ova i komentara
https://github.com/Vivify-Ideas/vivifyacademy-blog-api

 Zadatak 1
Napraviti novi React projekat `blog-app`
Commit-ovati projekat na GitHub na novi git repository
Uključiti Bootstrap 4 u projekat
Postaviti layout
Dodati komponentu `AppPosts`
Postaviti route-u `/posts` koje će otvarati ovu komponentu. Ovo treba da bude default route-a
Postaviti link `Posts` u layout
Commit-ovati urađeno

	
Zadatak 2
Post je predstavljen objektom sa sledećim poljima: id, title, text
Polje id se unosi od strane API-ja
Dodati servis `Posts`, u kome će se nalaziti metode koje šalju request-ove prema API-ju. 
Napraviti metodu `getAll` koja će dobavljati listu post-ova sa `/api/posts`
Implementirati listanje post-ova u komponenti `AppPosts`
Commit-ovati urađeno

	

Zadatak 3
Pored naziva svakog post-a, treba da stoji link `View Post`. 
Klikom na ovaj link, korisnik se redirect-uje na `/post/:id` rutu, koja ce prikazati novu komponentu `SinglePost`. Ova stranica treba da prikazuje sve detalje o post-u ( title, text )
Kako bismo pronašli odgovarajući post, u `Posts` servisu je potrebno dodati metodu `get (id)` koja dobavlja post sa endpoint-a `/api/posts/{id}`. ID koji će biti prosleđen možemo izvući iz URL-a.
Commit-ovati urađeno



Zadatak 4
Dodati komponentu AddPost i route-u `/add` koja otvara ovu komponentu
U layout dodati link `Add` koji vodi na URL `/add`
Prikazati formu gde se upisuju svi potrebni podaci o post-u. Svi podaci se unose pomoću text input-a
Formu submit-ovati pomoću submit button-a
U servis `Posts` dodati metodu `add`. Ova metoda treba da prosleđuje podatke endpoint-u `/api/posts`
Submit-ovanje forme treba da poziva metodu `add` u servisu `Posts` i prosleđuje odgovarajuće podatke
Nakon submit-ovanja forme, redirect-ovati korisnika na `/posts` stranicu
Commit-ovati urađeno


Zadatak 5
Na formu dodati button `Reset`. Ovaj button treba da reset-uje formu.
Commit-ovati urađeno


Zadatak 6
Postaviti HTML validaciju na formu
Sva polja su required
Polje title mora da ima bar 2 karaktera
Polje text ne sme biti preko 300 karaktera
Commit-ovati urađeno



Zadatak 7
Na listi post-ova, pored svakog post-a postaviti dugme `Edit`
Klik na ovo dugme treba da vodi na stranicu `/edit/:id`, koja treba da prikaže `AddPost` komponentu
U `AddPost` pomoću parametra `id` iz URL-a, implementirati dobavljanje odgovarajućeg post-a iz servisa `Posts`.
Implementirati edit-ovanje post-a preko iste forme za kreiranje.
Formu popuniti sa podacima postojećeg objekta
U servis `Posts` dodati metodu `edit (id)` koja ce primati id post-a koji se edit-uje, i prosleđivati na endpoint `/api/posts/{id}`
Prilikom submit-ovanja forme pozvati ili `add` ili `edit`, u zavisnosti da se edit-uje ili dodaje nov post
Commit-ovati urađeno



Zadatak 8
Na listi post-ova, pored svakog post-a postaviti dugme `Delete`
Klik na ovo dugme treba da pozove metodu `delete (id)` servisa `Posts`, koja će prosleđeni id poslati na endpoint `api/posts/{id}` i time obrisati post iz liste
Commit-ovati urađeno



Zadatak 9
Komentar je predstavljen objektom sa sledećim poljima: id i text
Svaki post može imati komentare
U okviru `SinglePost` stranice, dodati novu formu, koja će omogućiti dodavanje komentara za svaki post
Ova forma treba da bude predstavljena posebnom komponentom - `AddComment`, i da sadrži text kao required polje
U `Posts` servisu napraviti metodu `addComment (comment, postId)`, koja će slati podatke na `/api/posts/{postId}/comments` endpoint
Modifikovati metodu `get (id)`	`api/posts/{id}?filter={"include":["comments"]}` i iz dobijenog response-a izvući komentare traženog post-a
Nakon submit-a forme treba da poziva metodu `addComment (comment, postId)` servisa `Posts`
U `AppPosts` pored svakog post-a dodati i broj komentara.
Commit-ovati urađeno


Zadatak 10
Napraviti custom hook ‘useFormattedDate’ koji će da prima dva parametra:

(str, outputFormat = 'YYYY-MM-DD HH:mm:ss') 
Formatira prosleđeni datum u odabrani format, default-uje  na YYYY-MM-DD HH:mm:ss

Za manipulacije datumima koristiti DateFns
Iskoristiti kreirani hook u komponenti SinglePost za prikazivanje `createdAt` property-ja koji je prisutan na post objektu vraćenom sa API-ja.
Commit-ovati urađeno
				You’re done! 😎


