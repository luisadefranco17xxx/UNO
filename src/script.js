"use strict";
const namesArr = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan", "Abaan", "Abbas", "Abdallah", "Abdalroof", "Abdihakim", "Abdirahman", "Abdisalam", "Abdul", "Abdul-Aziz", "Abdulbasir", "Abdulkadir", "Abdulkarem", "Abdulkhader", "Abdullah", "Abdul-Majeed", "Abdulmalik", "Abdul-Rehman", "Abdur", "Abdurraheem", "Abdur-Rahman", "Abdur-Rehmaan", "Abel", "Abhinav", "Abhisumant", "Abid", "Abir", "Abraham", "Abu", "Abubakar", "Ace", "Adain", "Adam", "Adam-James", "Addison", "Addisson", "Adegbola", "Adegbolahan", "Aden", "Adenn", "Adie", "Adil", "Aditya", "Adnan", "Adrian", "Adrien", "Aedan", "Aedin", "Aedyn", "Aeron", "Afonso", "Ahmad", "Ahmed", "Ahmed-Aziz", "Ahoua", "Ahtasham", "Aiadan", "Aidan", "Aiden", "Aiden-Jack", "Aiden-Vee", "Aidian", "Aidy", "Ailin", "Aiman", "Ainsley", "Ainslie", "Airen", "Airidas", "Airlie", "AJ", "Ajay", "A-Jay", "Ajayraj", "Akan", "Akram", "Al", "Ala", "Alan", "Alanas", "Alasdair", "Alastair", "Alber", "Albert", "Albie", "Aldred", "Alec", "Aled", "Aleem", "Aleksandar", "Aleksander", "Aleksandr", "Aleksandrs", "Alekzander", "Alessandro", "Alessio", "Alex", "Alexander", "Alexei", "Alexx", "Alexzander", "Alf", "Alfee", "Alfie", "Alfred", "Alfy", "Alhaji", "Al-Hassan", "Ali", "Aliekber", "Alieu", "Alihaider", "Alisdair", "Alishan", "Alistair", "Alistar", "Alister", "Aliyaan", "Allan", "Allan-Laiton", "Allen", "Allesandro", "Allister", "Ally", "Alphonse", "Altyiab", "Alum", "Alvern", "Alvin", "Alyas", "Amaan", "Aman", "Amani", "Ambanimoh", "Ameer", "Amgad", "Ami", "Amin", "Amir", "Ammaar", "Ammar", "Ammer", "Amolpreet", "Amos", "Amrinder", "Amrit", "Amro", "Anay", "Andrea", "Andreas", "Andrei", "Andrejs", "Andrew", "Andy", "Anees", "Anesu", "Angel", "Angelo", "Angus", "Anir", "Anis", "Anish", "Anmolpreet", "Annan", "Anndra", "Anselm", "Anthony", "Anthony-John", "Antoine", "Anton", "Antoni", "Antonio", "Antony", "Antonyo", "Anubhav", "Aodhan", "Aon", "Aonghus", "Apisai", "Arafat", "Aran", "Arandeep", "Arann", "Aray", "Arayan", "Archibald", "Archie", "Arda", "Ardal", "Ardeshir", "Areeb", "Areez", "Aref", "Arfin", "Argyle", "Argyll", "Ari", "Aria", "Arian", "Arihant", "Aristomenis", "Aristotelis", "Arjuna", "Arlo", "Armaan", "Arman", "Armen", "Arnab", "Arnav", "Arnold", "Aron", "Aronas", "Arran", "Arrham", "Arron", "Arryn", "Arsalan", "Artem", "Arthur", "Artur", "Arturo", "Arun", "Arunas", "Arved", "Arya", "Aryan", "Aryankhan", "Aryian", "Aryn", "Asa", "Asfhan", "Ash", "Ashlee-jay", "Ashley", "Ashton", "Ashton-Lloyd", "Ashtyn", "Ashwin", "Asif", "Asim", "Aslam", "Asrar", "Ata", "Atal", "Atapattu", "Ateeq", "Athol", "Athon", "Athos-Carlos", "Atli", "Atom", "Attila", "Aulay", "Aun", "Austen", "Austin", "Avani", "Averon", "Avi", "Avinash", "Avraham", "Awais", "Awwal", "Axel", "Ayaan", "Ayan", "Aydan", "Ayden", "Aydin", "Aydon", "Ayman", "Ayomide", "Ayren", "Ayrton", "Aytug", "Ayub", "Ayyub", "Azaan", "Azedine", "Azeem", "Azim", "Aziz", "Azlan", "Azzam", "Azzedine", "Babatunmise", "Babur", "Bader", "Badr", "Badsha", "Bailee", "Bailey", "Bailie", "Bailley", "Baillie", "Baley", "Balian", "Banan", "Barath", "Barkley", "Barney", "Baron", "Barrie", "Barry", "Bartlomiej", "Bartosz", "Basher", "Basile", "Baxter", "Baye", "Bayley", "Beau", "Beinn", "Bekim", "Believe", "Ben", "Bendeguz", "Benedict", "Benjamin", "Benjamyn", "Benji", "Benn", "Bennett", "Benny", "Benoit", "Bentley", "Berkay", "Bernard", "Bertie", "Bevin", "Bezalel", "Bhaaldeen", "Bharath", "Bilal", "Bill", "Billy", "Binod", "Bjorn", "Blaike", "Blaine", "Blair", "Blaire", "Blake", "Blazej", "Blazey", "Blessing", "Blue", "Blyth", "Bo", "Boab", "Bob", "Bobby", "Bobby-Lee", "Bodhan", "Boedyn", "Bogdan", "Bohbi", "Bony", "Bowen", "Bowie", "Boyd", "Bracken", "Brad", "Bradan", "Braden", "Bradley", "Bradlie", "Bradly", "Brady", "Bradyn", "Braeden", "Braiden", "Brajan", "Brandan", "Branden", "Brandon", "Brandonlee", "Brandon-Lee", "Brandyn", "Brannan", "Brayden", "Braydon", "Braydyn", "Breandan", "Brehme", "Brendan", "Brendon", "Brendyn", "Breogan", "Bret", "Brett", "Briaddon", "Brian", "Brodi", "Brodie", "Brody", "Brogan", "Broghan", "Brooke", "Brooklin", "Brooklyn", "Bruce", "Bruin", "Bruno", "Brunon", "Bryan", "Bryce", "Bryden", "Brydon", "Brydon-Craig", "Bryn", "Brynmor", "Bryson", "Buddy", "Bully", "Burak", "Burhan", "Butali", "Butchi", "Byron", "Cabhan", "Cadan", "Cade", "Caden", "Cadon", "Cadyn", "Caedan", "Caedyn", "Cael", "Caelan", "Caelen", "Caethan", "Cahl", "Cahlum", "Cai", "Caidan", "Caiden", "Caiden-Paul", "Caidyn", "Caie", "Cailaen", "Cailean", "Caileb-John", "Cailin", "Cain", "Caine", "Cairn", "Cal", "Calan", "Calder", "Cale", "Calean", "Caleb", "Calen", "Caley", "Calib", "Calin", "Callahan", "Callan", "Callan-Adam", "Calley", "Callie", "Callin", "Callum", "Callun", "Callyn", "Calum", "Calum-James", "Calvin", "Cambell", "Camerin", "Cameron", "Campbel", "Campbell", "Camron", "Caolain", "Caolan", "Carl", "Carlo", "Carlos", "Carrich", "Carrick", "Carson", "Carter", "Carwyn", "Casey", "Casper", "Cassy", "Cathal", "Cator", "Cavan", "Cayden", "Cayden-Robert", "Cayden-Tiamo", "Ceejay", "Ceilan", "Ceiran", "Ceirin", "Ceiron", "Cejay", "Celik", "Cephas", "Cesar", "Cesare", "Chad", "Chaitanya", "Chang-Ha", "Charles", "Charley", "Charlie", "Charly", "Chase", "Che", "Chester", "Chevy", "Chi", "Chibudom", "Chidera", "Chimsom", "Chin", "Chintu", "Chiqal", "Chiron", "Chris", "Chris-Daniel", "Chrismedi", "Christian", "Christie", "Christoph", "Christopher", "Christopher-Lee", "Christy", "Chu", "Chukwuemeka", "Cian", "Ciann", "Ciar", "Ciaran", "Ciarian", "Cieran", "Cillian", "Cillin", "Cinar", "CJ", "C-Jay", "Clark", "Clarke", "Clayton", "Clement", "Clifford", "Clyde", "Cobain", "Coban", "Coben", "Cobi", "Cobie", "Coby", "Codey", "Codi", "Codie", "Cody", "Cody-Lee", "Coel", "Cohan", "Cohen", "Colby", "Cole", "Colin", "Coll", "Colm", "Colt", "Colton", "Colum", "Colvin", "Comghan", "Conal", "Conall", "Conan", "Conar", "Conghaile", "Conlan", "Conley", "Conli", "Conlin", "Conlly", "Conlon", "Conlyn", "Connal", "Connall", "Connan", "Connar", "Connel", "Connell", "Conner", "Connolly", "Connor", "Connor-David", "Conor", "Conrad", "Cooper", "Copeland", "Coray", "Corben", "Corbin", "Corey", "Corey-James", "Corey-Jay", "Cori", "Corie", "Corin", "Cormac", "Cormack", "Cormak", "Corran", "Corrie", "Cory", "Cosmo", "Coupar", "Craig", "Craig-James", "Crawford", "Creag", "Crispin", "Cristian", "Crombie", "Cruiz", "Cruz", "Cuillin", "Cullen", "Cullin", "Curtis", "Cyrus", "Daanyaal", "Daegan", "Daegyu", "Dafydd", "Dagon", "Dailey", "Daimhin", "Daithi", "Dakota", "Daksh", "Dale", "Dalong", "Dalton", "Damian", "Damien", "Damon", "Dan", "Danar", "Dane", "Danial", "Daniel", "Daniele", "Daniel-James", "Daniels", "Daniil", "Danish", "Daniyal", "Danniel", "Danny", "Dante", "Danyal", "Danyil", "Danys", "Daood", "Dara", "Darach", "Daragh", "Darcy", "D'arcy", "Dareh", "Daren", "Darien", "Darius", "Darl", "Darn", "Darrach", "Darragh", "Darrel", "Darrell", "Darren", "Darrie", "Darrius", "Darroch", "Darryl", "Darryn", "Darwyn", "Daryl", "Daryn", "Daud", "Daumantas", "Davi", "David", "David-Jay", "David-Lee", "Davie", "Davis", "Davy", "Dawid", "Dawson", "Dawud", "Dayem", "Daymian", "Deacon", "Deagan", "Dean", "Deano", "Decklan", "Declain", "Declan", "Declyan", "Declyn", "Dedeniseoluwa", "Deecan", "Deegan", "Deelan", "Deklain-Jaimes", "Del", "Demetrius", "Denis", "Deniss", "Dennan", "Dennin", "Dennis", "Denny", "Dennys", "Denon", "Denton", "Denver", "Denzel", "Deon", "Derek", "Derick", "Derin", "Dermot", "Derren", "Derrie", "Derrin", "Derron", "Derry", "Derryn", "Deryn", "Deshawn", "Desmond", "Dev", "Devan", "Devin", "Devlin", "Devlyn", "Devon", "Devrin", "Devyn", "Dex", "Dexter", "Dhani", "Dharam", "Dhavid", "Dhyia", "Diarmaid", "Diarmid", "Diarmuid", "Didier", "Diego", "Diesel", "Diesil", "Digby", "Dilan", "Dilano", "Dillan", "Dillon", "Dilraj", "Dimitri", "Dinaras", "Dion", "Dissanayake", "Dmitri", "Doire", "Dolan", "Domanic", "Domenico", "Domhnall", "Dominic", "Dominick", "Dominik", "Donald", "Donnacha", "Donnie", "Dorian", "Dougal", "Douglas", "Dougray", "Drakeo", "Dre", "Dregan", "Drew", "Dugald", "Duncan", "Duriel", "Dustin", "Dylan", "Dylan-Jack", "Dylan-James", "Dylan-John", "Dylan-Patrick", "Dylin", "Dyllan", "Dyllan-James", "Dyllon", "Eadie", "Eagann", "Eamon", "Eamonn", "Eason", "Eassan", "Easton", "Ebow", "Ed", "Eddie", "Eden", "Ediomi", "Edison", "Eduardo", "Eduards", "Edward", "Edwin", "Edwyn", "Eesa", "Efan", "Efe", "Ege", "Ehsan", "Ehsen", "Eiddon", "Eidhan", "Eihli", "Eimantas", "Eisa", "Eli", "Elias", "Elijah", "Eliot", "Elisau", "Eljay", "Eljon", "Elliot", "Elliott", "Ellis", "Ellisandro", "Elshan", "Elvin", "Elyan", "Emanuel", "Emerson", "Emil", "Emile", "Emir", "Emlyn", "Emmanuel", "Emmet", "Eng", "Eniola", "Enis", "Ennis", "Enrico", "Enrique", "Enzo", "Eoghain", "Eoghan", "Eoin", "Eonan", "Erdehan", "Eren", "Erencem", "Eric", "Ericlee", "Erik", "Eriz", "Ernie-Jacks", "Eroni", "Eryk", "Eshan", "Essa", "Esteban", "Ethan", "Etienne", "Etinosa", "Euan", "Eugene", "Evan", "Evann", "Ewan", "Ewen", "Ewing", "Exodi", "Ezekiel", "Ezra", "Fabian", "Fahad", "Faheem", "Faisal", "Faizaan", "Famara", "Fares", "Farhaan", "Farhan", "Farren", "Farzad", "Fauzaan", "Favour", "Fawaz", "Fawkes", "Faysal", "Fearghus", "Feden", "Felix", "Fergal", "Fergie", "Fergus", "Ferre", "Fezaan", "Fiachra", "Fikret", "Filip", "Filippo", "Finan", "Findlay", "Findlay-James", "Findlie", "Finlay", "Finley", "Finn", "Finnan", "Finnean", "Finnen", "Finnlay", "Finnley", "Fintan", "Fionn", "Firaaz", "Fletcher", "Flint", "Florin", "Flyn", "Flynn", "Fodeba", "Folarinwa", "Forbes", "Forgan", "Forrest", "Fox", "Francesco", "Francis", "Francisco", "Franciszek", "Franco", "Frank", "Frankie", "Franklin", "Franko", "Fraser", "Frazer", "Fred", "Freddie", "Frederick", "Fruin", "Fyfe", "Fyn", "Fynlay", "Fynn", "Gabriel", "Gallagher", "Gareth", "Garren", "Garrett", "Garry", "Gary", "Gavin", "Gavin-Lee", "Gene", "Geoff", "Geoffrey", "Geomer", "Geordan", "Geordie", "George", "Georgia", "Georgy", "Gerard", "Ghyll", "Giacomo", "Gian", "Giancarlo", "Gianluca", "Gianmarco", "Gideon", "Gil", "Gio", "Girijan", "Girius", "Gjan", "Glascott", "Glen", "Glenn", "Gordon", "Grady", "Graeme", "Graham", "Grahame", "Grant", "Grayson", "Greg", "Gregor", "Gregory", "Greig", "Griffin", "Griffyn", "Grzegorz", "Guang", "Guerin", "Guillaume", "Gurardass", "Gurdeep", "Gursees", "Gurthar", "Gurveer", "Gurwinder", "Gus", "Gustav", "Guthrie", "Guy", "Gytis", "Habeeb", "Hadji", "Hadyn", "Hagun", "Haiden", "Haider", "Hamad", "Hamid", "Hamish", "Hamza", "Hamzah", "Han", "Hansen", "Hao", "Hareem", "Hari", "Harikrishna", "Haris", "Harish", "Harjeevan", "Harjyot", "Harlee", "Harleigh", "Harley", "Harman", "Harnek", "Harold", "Haroon", "Harper", "Harri", "Harrington", "Harris", "Harrison", "Harry", "Harvey", "Harvie", "Harvinder", "Hasan", "Haseeb", "Hashem", "Hashim", "Hassan", "Hassanali", "Hately", "Havila", "Hayden", "Haydn", "Haydon", "Haydyn", "Hcen", "Hector", "Heddle", "Heidar", "Heini", "Hendri", "Henri", "Henry", "Herbert", "Heyden", "Hiro", "Hirvaansh", "Hishaam", "Hogan", "Honey", "Hong", "Hope", "Hopkin", "Hosea", "Howard", "Howie", "Hristomir", "Hubert", "Hugh", "Hugo", "Humza", "Hunter", "Husnain", "Hussain", "Hussan", "Hussnain", "Hussnan", "Hyden", "I", "Iagan", "Iain", "Ian", "Ibraheem", "Ibrahim", "Idahosa", "Idrees", "Idris", "Iestyn", "Ieuan", "Igor", "Ihtisham", "Ijay", "Ikechukwu", "Ikemsinachukwu", "Ilyaas", "Ilyas", "Iman", "Immanuel", "Inan", "Indy", "Ines", "Innes", "Ioannis", "Ireayomide", "Ireoluwa", "Irvin", "Irvine", "Isa", "Isaa", "Isaac", "Isaiah", "Isak", "Isher", "Ishwar", "Isimeli", "Isira", "Ismaeel", "Ismail", "Israel", "Issiaka", "Ivan", "Ivar", "Izaak", "J", "Jaay", "Jac", "Jace", "Jack", "Jacki", "Jackie", "Jack-James", "Jackson", "Jacky", "Jacob", "Jacques", "Jad", "Jaden", "Jadon", "Jadyn", "Jae", "Jagat", "Jago", "Jaheim", "Jahid", "Jahy", "Jai", "Jaida", "Jaiden", "Jaidyn", "Jaii", "Jaime", "Jai-Rajaram", "Jaise", "Jak", "Jake", "Jakey", "Jakob", "Jaksyn", "Jakub", "Jamaal", "Jamal", "Jameel", "Jameil", "James", "James-Paul", "Jamey", "Jamie", "Jan", "Jaosha", "Jardine", "Jared", "Jarell", "Jarl", "Jarno", "Jarred", "Jarvi", "Jasey-Jay", "Jasim", "Jaskaran", "Jason", "Jasper", "Jaxon", "Jaxson", "Jay", "Jaydan", "Jayden", "Jayden-James", "Jayden-Lee", "Jayden-Paul", "Jayden-Thomas", "Jaydn", "Jaydon", "Jaydyn", "Jayhan", "Jay-Jay", "Jayke", "Jaymie", "Jayse", "Jayson", "Jaz", "Jazeb", "Jazib", "Jazz", "Jean", "Jean-Lewis", "Jean-Pierre", "Jebadiah", "Jed", "Jedd", "Jedidiah", "Jeemie", "Jeevan", "Jeffrey", "Jensen", "Jenson", "Jensyn", "Jeremy", "Jerome", "Jeronimo", "Jerrick", "Jerry", "Jesse", "Jesuseun", "Jeswin", "Jevan", "Jeyun", "Jez", "Jia", "Jian", "Jiao", "Jimmy", "Jincheng", "JJ", "Joaquin", "Joash", "Jock", "Jody", "Joe", "Joeddy", "Joel", "Joey", "Joey-Jack", "Johann", "Johannes", "Johansson", "John", "Johnathan", "Johndean", "Johnjay", "John-Michael", "Johnnie", "Johnny", "Johnpaul", "John-Paul", "John-Scott", "Johnson", "Jole", "Jomuel", "Jon", "Jonah", "Jonatan", "Jonathan", "Jonathon", "Jonny", "Jonothan", "Jon-Paul", "Jonson", "Joojo", "Jordan", "Jordi", "Jordon", "Jordy", "Jordyn", "Jorge", "Joris", "Jorryn", "Josan", "Josef", "Joseph", "Josese", "Josh", "Joshiah", "Joshua", "Josiah", "Joss", "Jostelle", "Joynul", "Juan", "Jubin", "Judah", "Jude", "Jules", "Julian", "Julien", "Jun", "Junior", "Jura", "Justan", "Justin", "Justinas", "Kaan", "Kabeer", "Kabir", "Kacey", "Kacper", "Kade", "Kaden", "Kadin", "Kadyn", "Kaeden", "Kael", "Kaelan", "Kaelin", "Kaelum", "Kai", "Kaid", "Kaidan", "Kaiden", "Kaidinn", "Kaidyn", "Kaileb", "Kailin", "Kain", "Kaine", "Kainin", "Kainui", "Kairn", "Kaison", "Kaiwen", "Kajally", "Kajetan", "Kalani", "Kale", "Kaleb", "Kaleem", "Kal-el", "Kalen", "Kalin", "Kallan", "Kallin", "Kalum", "Kalvin", "Kalvyn", "Kameron", "Kames", "Kamil", "Kamran", "Kamron", "Kane", "Karam", "Karamvir", "Karandeep", "Kareem", "Karim", "Karimas", "Karl", "Karol", "Karson", "Karsyn", "Karthikeya", "Kasey", "Kash", "Kashif", "Kasim", "Kasper", "Kasra", "Kavin", "Kayam", "Kaydan", "Kayden", "Kaydin", "Kaydn", "Kaydyn", "Kaydyne", "Kayleb", "Kaylem", "Kaylum", "Kayne", "Kaywan", "Kealan", "Kealon", "Kean", "Keane", "Kearney", "Keatin", "Keaton", "Keavan", "Keayn", "Kedrick", "Keegan", "Keelan", "Keelin", "Keeman", "Keenan", "Keenan-Lee", "Keeton", "Kehinde", "Keigan", "Keilan", "Keir", "Keiran", "Keiren", "Keiron", "Keiryn", "Keison", "Keith", "Keivlin", "Kelam", "Kelan", "Kellan", "Kellen", "Kelso", "Kelum", "Kelvan", "Kelvin", "Ken", "Kenan", "Kendall", "Kendyn", "Kenlin", "Kenneth", "Kensey", "Kenton", "Kenyon", "Kenzeigh", "Kenzi", "Kenzie", "Kenzo", "Kenzy", "Keo", "Ker", "Kern", "Kerr", "Kevan", "Kevin", "Kevyn", "Kez", "Khai", "Khalan", "Khaleel", "Khaya", "Khevien", "Khizar", "Khizer", "Kia", "Kian", "Kian-James", "Kiaran", "Kiarash", "Kie", "Kiefer", "Kiegan", "Kienan", "Kier", "Kieran", "Kieran-Scott", "Kieren", "Kierin", "Kiern", "Kieron", "Kieryn", "Kile", "Killian", "Kimi", "Kingston", "Kinneil", "Kinnon", "Kinsey", "Kiran", "Kirk", "Kirwin", "Kit", "Kiya", "Kiyonari", "Kjae", "Klein", "Klevis", "Kobe", "Kobi", "Koby", "Koddi", "Koden", "Kodi", "Kodie", "Kody", "Kofi", "Kogan", "Kohen", "Kole", "Konan", "Konar", "Konnor", "Konrad", "Koray", "Korben", "Korbyn", "Korey", "Kori", "Korrin", "Kory", "Koushik", "Kris", "Krish", "Krishan", "Kriss", "Kristian", "Kristin", "Kristofer", "Kristoffer", "Kristopher", "Kruz", "Krzysiek", "Krzysztof", "Ksawery", "Ksawier", "Kuba", "Kurt", "Kurtis", "Kurtis-Jae", "Kyaan", "Kyan", "Kyde", "Kyden", "Kye", "Kyel", "Kyhran", "Kyie", "Kylan", "Kylar", "Kyle", "Kyle-Derek", "Kylian", "Kym", "Kynan", "Kyral", "Kyran", "Kyren", "Kyrillos", "Kyro", "Kyron", "Kyrran", "Lachlainn", "Lachlan", "Lachlann", "Lael", "Lagan", "Laird", "Laison", "Lakshya", "Lance", "Lancelot", "Landon", "Lang", "Lasse", "Latif", "Lauchlan", "Lauchlin", "Laughlan", "Lauren", "Laurence", "Laurie", "Lawlyn", "Lawrence", "Lawrie", "Lawson", "Layne", "Layton", "Lee", "Leigh", "Leigham", "Leighton", "Leilan", "Leiten", "Leithen", "Leland", "Lenin", "Lennan", "Lennen", "Lennex", "Lennon", "Lennox", "Lenny", "Leno", "Lenon", "Lenyn", "Leo", "Leon", "Leonard", "Leonardas", "Leonardo", "Lepeng", "Leroy", "Leven", "Levi", "Levon", "Levy", "Lewie", "Lewin", "Lewis", "Lex", "Leydon", "Leyland", "Leylann", "Leyton", "Liall", "Liam", "Liam-Stephen", "Limo", "Lincoln", "Lincoln-John", "Lincon", "Linden", "Linton", "Lionel", "Lisandro", "Litrell", "Liyonela-Elam", "LLeyton", "Lliam", "Lloyd", "Lloyde", "Loche", "Lochlan", "Lochlann", "Lochlan-Oliver", "Lock", "Lockey", "Logan", "Logann", "Logan-Rhys", "Loghan", "Lokesh", "Loki", "Lomond", "Lorcan", "Lorenz", "Lorenzo", "Lorne", "Loudon", "Loui", "Louie", "Louis", "Loukas", "Lovell", "Luc", "Luca", "Lucais", "Lucas", "Lucca", "Lucian", "Luciano", "Lucien", "Lucus", "Luic", "Luis", "Luk", "Luka", "Lukas", "Lukasz", "Luke", "Lukmaan", "Luqman", "Lyall", "Lyle", "Lyndsay", "Lysander", "Maanav", "Maaz", "Mac", "Macallum", "Macaulay", "Macauley", "Macaully", "Machlan", "Maciej", "Mack", "Mackenzie", "Mackenzy", "Mackie", "Macsen", "Macy", "Madaki", "Maddison", "Maddox", "Madison", "Madison-Jake", "Madox", "Mael", "Magnus", "Mahan", "Mahdi", "Mahmoud", "Maias", "Maison", "Maisum", "Maitlind", "Majid", "Makensie", "Makenzie", "Makin", "Maksim", "Maksymilian", "Malachai", "Malachi", "Malachy", "Malakai", "Malakhy", "Malcolm", "Malik", "Malikye", "Malo", "Ma'moon", "Manas", "Maneet", "Manmohan", "Manolo", "Manson", "Mantej", "Manuel", "Manus", "Marc", "Marc-Anthony", "Marcel", "Marcello", "Marcin", "Marco", "Marcos", "Marcous", "Marcquis", "Marcus", "Mario", "Marios", "Marius", "Mark", "Marko", "Markus", "Marley", "Marlin", "Marlon", "Maros", "Marshall", "Martin", "Marty", "Martyn", "Marvellous", "Marvin", "Marwan", "Maryk", "Marzuq", "Mashhood", "Mason", "Mason-Jay", "Masood", "Masson", "Matas", "Matej", "Mateusz", "Mathew", "Mathias", "Mathu", "Mathuyan", "Mati", "Matt", "Matteo", "Matthew", "Matthew-William", "Matthias", "Max", "Maxim", "Maximilian", "Maximillian", "Maximus", "Maxwell", "Maxx", "Mayeul", "Mayson", "Mazin", "Mcbride", "McCaulley", "McKade", "McKauley", "McKay", "McKenzie", "McLay", "Meftah", "Mehmet", "Mehraz", "Meko", "Melville", "Meshach", "Meyzhward", "Micah", "Michael", "Michael-Alexander", "Michael-James", "Michal", "Michat", "Micheal", "Michee", "Mickey", "Miguel", "Mika", "Mikael", "Mikee", "Mikey", "Mikhail", "Mikolaj", "Miles", "Millar", "Miller", "Milo", "Milos", "Milosz", "Mir", "Mirza", "Mitch", "Mitchel", "Mitchell", "Moad", "Moayd", "Mobeen", "Modoulamin", "Modu", "Mohamad", "Mohamed", "Mohammad", "Mohammad-Bilal", "Mohammed", "Mohanad", "Mohd", "Momin", "Momooreoluwa", "Montague", "Montgomery", "Monty", "Moore", "Moosa", "Moray", "Morgan", "Morgyn", "Morris", "Morton", "Moshy", "Motade", "Moyes", "Msughter", "Mueez", "Muhamadjavad", "Muhammad", "Muhammed", "Muhsin", "Muir", "Munachi", "Muneeb", "Mungo", "Munir", "Munmair", "Munro", "Murdo", "Murray", "Murrough", "Murry", "Musa", "Musse", "Mustafa", "Mustapha", "Muzammil", "Muzzammil", "Mykie", "Myles", "Mylo", "Nabeel", "Nadeem", "Nader", "Nagib", "Naif", "Nairn", "Narvic", "Nash", "Nasser", "Nassir", "Natan", "Nate", "Nathan", "Nathanael", "Nathanial", "Nathaniel", "Nathan-Rae", "Nawfal", "Nayan", "Neco", "Neil", "Nelson", "Neo", "Neshawn", "Nevan", "Nevin", "Ngonidzashe", "Nial", "Niall", "Nicholas", "Nick", "Nickhill", "Nicki", "Nickson", "Nicky", "Nico", "Nicodemus", "Nicol", "Nicolae", "Nicolas", "Nidhish", "Nihaal", "Nihal", "Nikash", "Nikhil", "Niki", "Nikita", "Nikodem", "Nikolai", "Nikos", "Nilav", "Niraj", "Niro", "Niven", "Noah", "Noel", "Nolan", "Noor", "Norman", "Norrie", "Nuada", "Nyah", "Oakley", "Oban", "Obieluem", "Obosa", "Odhran", "Odin", "Odynn", "Ogheneochuko", "Ogheneruno", "Ohran", "Oilibhear", "Oisin", "Ojima-Ojo", "Okeoghene", "Olaf", "Ola-Oluwa", "Olaoluwapolorimi", "Ole", "Olie", "Oliver", "Olivier", "Oliwier", "Ollie", "Olurotimi", "Oluwadamilare", "Oluwadamiloju", "Oluwafemi", "Oluwafikunayomi", "Oluwalayomi", "Oluwatobiloba", "Oluwatoni", "Omar", "Omri", "Oran", "Orin", "Orlando", "Orley", "Orran", "Orrick", "Orrin", "Orson", "Oryn", "Oscar", "Osesenagha", "Oskar", "Ossian", "Oswald", "Otto", "Owain", "Owais", "Owen", "Owyn", "Oz", "Ozzy", "Pablo", "Pacey", "Padraig", "Paolo", "Pardeepraj", "Parkash", "Parker", "Pascoe", "Pasquale", "Patrick", "Patrick-John", "Patrikas", "Patryk", "Paul", "Pavit", "Pawel", "Pawlo", "Pearce", "Pearse", "Pearsen", "Pedram", "Pedro", "Peirce", "Peiyan", "Pele", "Peni", "Peregrine", "Peter", "Phani", "Philip", "Philippos", "Phinehas", "Phoenix", "Phoevos", "Pierce", "Pierre-Antoine", "Pieter", "Pietro", "Piotr", "Porter", "Prabhjoit", "Prabodhan", "Praise", "Pranav", "Pravin", "Precious", "Prentice", "Presley", "Preston", "Preston-Jay", "Prinay", "Prince", "Prithvi", "Promise", "Puneetpaul", "Pushkar", "Qasim", "Qirui", "Quinlan", "Quinn", "Radmiras", "Raees", "Raegan", "Rafael", "Rafal", "Rafferty", "Rafi", "Raheem", "Rahil", "Rahim", "Rahman", "Raith", "Raithin", "Raja", "Rajab-Ali", "Rajan", "Ralfs", "Ralph", "Ramanas", "Ramit", "Ramone", "Ramsay", "Ramsey", "Rana", "Ranolph", "Raphael", "Rasmus", "Rasul", "Raul", "Raunaq", "Ravin", "Ray", "Rayaan", "Rayan", "Rayane", "Rayden", "Rayhan", "Raymond", "Rayne", "Rayyan", "Raza", "Reace", "Reagan", "Reean", "Reece", "Reed", "Reegan", "Rees", "Reese", "Reeve", "Regan", "Regean", "Reggie", "Rehaan", "Rehan", "Reice", "Reid", "Reigan", "Reilly", "Reily", "Reis", "Reiss", "Remigiusz", "Remo", "Remy", "Ren", "Renars", "Reng", "Rennie", "Reno", "Reo", "Reuben", "Rexford", "Reynold", "Rhein", "Rheo", "Rhett", "Rheyden", "Rhian", "Rhoan", "Rholmark", "Rhoridh", "Rhuairidh", "Rhuan", "Rhuaridh", "Rhudi", "Rhy", "Rhyan", "Rhyley", "Rhyon", "Rhys", "Rhys-Bernard", "Rhyse", "Riach", "Rian", "Ricards", "Riccardo", "Ricco", "Rice", "Richard", "Richey", "Richie", "Ricky", "Rico", "Ridley", "Ridwan", "Rihab", "Rihan", "Rihards", "Rihonn", "Rikki", "Riley", "Rio", "Rioden", "Rishi", "Ritchie", "Rivan", "Riyadh", "Riyaj", "Roan", "Roark", "Roary", "Rob", "Robbi", "Robbie", "Robbie-lee", "Robby", "Robert", "Robert-Gordon", "Robertjohn", "Robi", "Robin", "Rocco", "Roddy", "Roderick", "Rodrigo", "Roen", "Rogan", "Roger", "Rohaan", "Rohan", "Rohin", "Rohit", "Rokas", "Roman", "Ronald", "Ronan", "Ronan-Benedict", "Ronin", "Ronnie", "Rooke", "Roray", "Rori", "Rorie", "Rory", "Roshan", "Ross", "Ross-Andrew", "Rossi", "Rowan", "Rowen", "Roy", "Ruadhan", "Ruaidhri", "Ruairi", "Ruairidh", "Ruan", "Ruaraidh", "Ruari", "Ruaridh", "Ruben", "Rubhan", "Rubin", "Rubyn", "Rudi", "Rudy", "Rufus", "Rui", "Ruo", "Rupert", "Ruslan", "Russel", "Russell", "Ryaan", "Ryan", "Ryan-Lee", "Ryden", "Ryder", "Ryese", "Ryhs", "Rylan", "Rylay", "Rylee", "Ryleigh", "Ryley", "Rylie", "Ryo", "Ryszard", "Saad", "Sabeen", "Sachkirat", "Saffi", "Saghun", "Sahaib", "Sahbian", "Sahil", "Saif", "Saifaddine", "Saim", "Sajid", "Sajjad", "Salahudin", "Salman", "Salter", "Salvador", "Sam", "Saman", "Samar", "Samarjit", "Samatar", "Sambrid", "Sameer", "Sami", "Samir", "Sami-Ullah", "Samual", "Samuel", "Samuela", "Samy", "Sanaullah", "Sandro", "Sandy", "Sanfur", "Sanjay", "Santiago", "Santino", "Satveer", "Saul", "Saunders", "Savin", "Sayad", "Sayeed", "Sayf", "Scot", "Scott", "Scott-Alexander", "Seaan", "Seamas", "Seamus", "Sean", "Seane", "Sean-James", "Sean-Paul", "Sean-Ray", "Seb", "Sebastian", "Sebastien", "Selasi", "Seonaidh", "Sephiroth", "Sergei", "Sergio", "Seth", "Sethu", "Seumas", "Shaarvin", "Shadow", "Shae", "Shahmir", "Shai", "Shane", "Shannon", "Sharland", "Sharoz", "Shaughn", "Shaun", "Shaunpaul", "Shaun-Paul", "Shaun-Thomas", "Shaurya", "Shaw", "Shawn", "Shawnpaul", "Shay", "Shayaan", "Shayan", "Shaye", "Shayne", "Shazil", "Shea", "Sheafan", "Sheigh", "Shenuk", "Sher", "Shergo", "Sheriff", "Sherwyn", "Shiloh", "Shiraz", "Shreeram", "Shreyas", "Shyam", "Siddhant", "Siddharth", "Sidharth", "Sidney", "Siergiej", "Silas", "Simon", "Sinai", "Skye", "Sofian", "Sohaib", "Sohail", "Soham", "Sohan", "Sol", "Solomon", "Sonneey", "Sonni", "Sonny", "Sorley", "Soul", "Spencer", "Spondon", "Stanislaw", "Stanley", "Stefan", "Stefano", "Stefin", "Stephen", "Stephenjunior", "Steve", "Steven", "Steven-lee", "Stevie", "Stewart", "Stewarty", "Strachan", "Struan", "Stuart", "Su", "Subhaan", "Sudais", "Suheyb", "Suilven", "Sukhi", "Sukhpal", "Sukhvir", "Sulayman", "Sullivan", "Sultan", "Sung", "Sunny", "Suraj", "Surien", "Sweyn", "Syed", "Sylvain", "Symon", "Szymon", "Tadd", "Taddy", "Tadhg", "Taegan", "Taegen", "Tai", "Tait", "Taiwo", "Talha", "Taliesin", "Talon", "Talorcan", "Tamar", "Tamiem", "Tammam", "Tanay", "Tane", "Tanner", "Tanvir", "Tanzeel", "Taonga", "Tarik", "Tariq-Jay", "Tate", "Taylan", "Taylar", "Tayler", "Taylor", "Taylor-Jay", "Taylor-Lee", "Tayo", "Tayyab", "Tayye", "Tayyib", "Teagan", "Tee", "Teejay", "Tee-jay", "Tegan", "Teighen", "Teiyib", "Te-Jay", "Temba", "Teo", "Teodor", "Teos", "Terry", "Teydren", "Theo", "Theodore", "Thiago", "Thierry", "Thom", "Thomas", "Thomas-Jay", "Thomson", "Thorben", "Thorfinn", "Thrinei", "Thumbiko", "Tiago", "Tian", "Tiarnan", "Tibet", "Tieran", "Tiernan", "Timothy", "Timucin", "Tiree", "Tisloh", "Titi", "Titus", "Tiylar", "TJ", "Tjay", "T-Jay", "Tobey", "Tobi", "Tobias", "Tobie", "Toby", "Todd", "Tokinaga", "Toluwalase", "Tom", "Tomas", "Tomasz", "Tommi-Lee", "Tommy", "Tomson", "Tony", "Torin", "Torquil", "Torran", "Torrin", "Torsten", "Trafford", "Trai", "Travis", "Tre", "Trent", "Trey", "Tristain", "Tristan", "Troy", "Tubagus", "Turki", "Turner", "Ty", "Ty-Alexander", "Tye", "Tyelor", "Tylar", "Tyler", "Tyler-James", "Tyler-Jay", "Tyllor", "Tylor", "Tymom", "Tymon", "Tymoteusz", "Tyra", "Tyree", "Tyrnan", "Tyrone", "Tyson", "Ubaid", "Ubayd", "Uchenna", "Uilleam", "Umair", "Umar", "Umer", "Umut", "Urban", "Uri", "Usman", "Uzair", "Uzayr", "Valen", "Valentin", "Valentino", "Valery", "Valo", "Vasyl", "Vedantsinh", "Veeran", "Victor", "Victory", "Vinay", "Vince", "Vincent", "Vincenzo", "Vinh", "Vinnie", "Vithujan", "Vladimir", "Vladislav", "Vrishin", "Vuyolwethu", "Wabuya", "Wai", "Walid", "Wallace", "Walter", "Waqaas", "Warkhas", "Warren", "Warrick", "Wasif", "Wayde", "Wayne", "Wei", "Wen", "Wesley", "Wesley-Scott", "Wiktor", "Wilkie", "Will", "William", "William-John", "Willum", "Wilson", "Windsor", "Wojciech", "Woyenbrakemi", "Wyatt", "Wylie", "Wynn", "Xabier", "Xander", "Xavier", "Xiao", "Xida", "Xin", "Xue", "Yadgor", "Yago", "Yahya", "Yakup", "Yang", "Yanick", "Yann", "Yannick", "Yaseen", "Yasin", "Yasir", "Yassin", "Yoji", "Yong", "Yoolgeun", "Yorgos", "Youcef", "Yousif", "Youssef", "Yu", "Yuanyu", "Yuri", "Yusef", "Yusuf", "Yves", "Zaaine", "Zaak", "Zac", "Zach", "Zachariah", "Zacharias", "Zacharie", "Zacharius", "Zachariya", "Zachary", "Zachary-Marc", "Zachery", "Zack", "Zackary", "Zaid", "Zain", "Zaine", "Zaineddine", "Zainedin", "Zak", "Zakaria", "Zakariya", "Zakary", "Zaki", "Zakir", "Zakk", "Zamaar", "Zander", "Zane", "Zarran", "Zayd", "Zayn", "Zayne", "Ze", "Zechariah", "Zeek", "Zeeshan", "Zeid", "Zein", "Zen", "Zendel", "Zenith", "Zennon", "Zeph", "Zerah", "Zhen", "Zhi", "Zhong", "Zhuo", "Zi", "Zidane", "Zijie", "Zinedine", "Zion", "Zishan", "Ziya", "Ziyaan", "Zohaib", "Zohair", "Zoubaeir", "Zubair", "Zubayr", "Zuriel"]


var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
var colorModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));

var namesToSent;
var readyToSend;
var session_id;
var pile = "";
var pileColor = "";
var pileValue = "";
var arrowDirection = 1;

let nextPlayer;
let lastPlayer;
var baseUrl = "src/img/";
var fieldnamenList = [];
var scoreHand;
var wild;
var eventForModal;
var lastWild;


let score = 0;
let totScore = [0, 0, 0, 0];

class Player {
    constructor(name, cards, color, value, score) {
        this.name = name;
        this.cards = cards;
        this.color = color;
        this.value = value;
        this.score = score;
    }
}

let arrPlayer_ = new Player;
let score_;
let cards_ = ["", "", ""];
let color_ = ["", "", ""];
let value_ = [0, 0, 0];


myModal.show();


setTimeout(function () {
    document.getElementById("name1").focus();
}, 500);

let formInputNames = document.getElementById("form-names-modal");
formInputNames.addEventListener("keyup", function () {

// ****************** fill names array ************************ --->
    let fieldName1 = document.getElementById("name1");
    let fieldName2 = document.getElementById("name2");
    let fieldName3 = document.getElementById("name3");
    let fieldName4 = document.getElementById("name4");

    fieldnamenList = [fieldName1.value, fieldName2.value, fieldName3.value, fieldName4.value];


// ****************** Validations -- IF name field is empty  ************************ --->

    var formIsFull = true;
    readyToSend = false;

    console.log("fieldnamenList --> " + fieldnamenList.toString())
    fieldnamenList.forEach(function (fieldElement) {
        if (fieldElement == "") {
            formIsFull = false;

            document.getElementById('ready-to-send').classList.remove('display-feedback-success');
            document.getElementById('error-feedback-empty').classList.add('display-feedback-empty');
        }
        if (formIsFull == true) {
            console.log('FORM IS FULL')
            document.getElementById('error-feedback-empty').classList.remove('display-feedback-empty');
        }
    });

// ****************** Validations -- IF names are not repeated  ************************ --->


    if (formIsFull) {
        readyToSend = true;
        for (var j = 0, len = fieldnamenList.length - 1; j < len; j++) {
            for (var i = j + 1, len = fieldnamenList.length; i < len; i++) {

                if (fieldnamenList[i] == fieldnamenList[j]) {
                    console.log("There are two repeated names");
                    document.getElementById('error-feedback-names').classList.add('display-feedback-repeatednames');
                    document.getElementById('ready-to-send').classList.remove('display-feedback-success');
                    document.getElementById('start-game-btn').disabled = true;

                    readyToSend = false;
                }
            }
        }

// ****************** Validations -- When it is ready to send remove error classes, display dancers and enable button  ************************ --->

        if (readyToSend == true) {
            document.getElementById('error-feedback-names').classList.remove('display-feedback-repeatednames');
            document.getElementById('ready-to-send').classList.add('display-feedback-success');
            console.log("HERE!!!! Validations ")
            document.getElementById('start-game-btn').classList.add('footer-btn-modal-names');
            console.log(document.getElementById('start-game-btn'));
            document.getElementById('start-game-btn').disabled = false;
            playAudio(1, true);
        }
        namesToSent = fieldnamenList;
    }
});

// ****************** NAME GENERATOR  ************************ --->

const getRandomNumber = (max) => Math.floor(Math.random() * max);
let generateNamesButton = document.getElementById('generate-names-btn');
generateNamesButton.addEventListener('click', function () {

    let nameInput;
    for (let i = 0; i < 4; i++) {
        nameInput = document.getElementById('name' + (i + 1));
        nameInput.value = namesArr[getRandomNumber(namesArr.length)];
        //nameInput.disabled = true;

        fieldnamenList[i] = nameInput.value;
        console.log("fieldnamenList[" + i + "] --> " + fieldnamenList[i]);
    }

    document.getElementById('start-game-btn').classList.add('footer-btn-modal-names');
    document.getElementById('start-game-btn').disabled = false;
    document.getElementById('ready-to-send').classList.add('display-feedback-success');
    playAudio(1, true);
    namesToSent = fieldnamenList;
    readyToSend = true;

});
// ****************** END NAME GENERATOR  ************************

let startGameModalButton = document.getElementById("start-game-btn");
startGameModalButton.addEventListener("click", function () {

    if (readyToSend) {
        myModal.hide()

        startGame();
        playAudio(1, false);
    }
});


let colorButtonClicked = document.getElementById('colorButtonClicked');
colorButtonClicked.addEventListener("click", function (event) {
    wild = event.target.id;
    console.log(" WILD -->");
    console.log(wild);
    sendCard(eventForModal.dataset.value, eventForModal.dataset.color, wild);
});

async function startGame() {
    let p1TypeAvatar = document.querySelector('[name="inlineRadioOptions-1"]:checked').value
    let p2TypeAvatar = document.querySelector('[name="inlineRadioOptions-2"]:checked').value
    let p3TypeAvatar = document.querySelector('[name="inlineRadioOptions-3"]:checked').value
    let p4TypeAvatar = document.querySelector('[name="inlineRadioOptions-4"]:checked').value

    document.getElementById('avatar-p1').src = "https://robohash.org/" + fieldnamenList[0] + ".png?set=" + p1TypeAvatar;
    document.getElementById('avatar-p2').src = "https://robohash.org/" + fieldnamenList[1] + ".png?set=" + p2TypeAvatar;
    document.getElementById('avatar-p3').src = "https://robohash.org/" + fieldnamenList[2] + ".png?set=" + p3TypeAvatar;
    document.getElementById('avatar-p4').src = "https://robohash.org/" + fieldnamenList[3] + ".png?set=" + p4TypeAvatar;


    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/game/start", {
        method: 'POST',
        body: JSON.stringify(
            namesToSent
        ),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });

    if (response.ok) {
        let result = await response.json();

        saveResponseFromServer(result);
        setPlayersNamesInBoard(namesToSent, result);
        setuptStartingCards();

    } else {
        console.log("HTTP-Error: " + response.status);
    }
}


function saveResponseFromServer(response) {
    //SCORE
    session_id = response.Id;
    lastPlayer = nextPlayer;
    nextPlayer = response.NextPlayer;
    let topCard = response.TopCard;
    pile = `${topCard.Color}${topCard.Value}`;
    pileColor = topCard.Color;
    pileValue = topCard.Value;

    for (let i = 0; i < 4; i++) {
        arrPlayer_[i] = new Player("toCancel", color_, value_, cards_, score_);
        arrPlayer_[i].cards_ = response.Players[i].Cards.map(item => `${item.Color}${item.Value}`);
        arrPlayer_[i].color_ = response.Players[i].Cards.map(item => `${item.Color}`);
        arrPlayer_[i].value_ = response.Players[i].Cards.map(item => `${item.Value}`);
        arrPlayer_[i].score_ = response.Players[i].Score;
    }
}


function setPlayersNamesInBoard(names, response) {
    for (let i = 0; i < names.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = names[i];
        let nameField = document.getElementById('name-player' + (i + 1));
        nameField.appendChild(li);
    }
    for (let i = 0; i < 4; i++) {
        setScore(response.Players[i].Score, i + 1);
    }

}

async function setuptStartingCards() {

    const url_pile = `${baseUrl}${pile}.png`;
    let myElem = document.getElementById("pile");
    const img = document.createElement("img");
    img.src = url_pile;
    img.id = "pile-top";
    myElem.appendChild(img);

    if (pileValue == 12) {
        arrowDirection = arrowDirection * (-1);
    }
    toggleArrow(arrowDirection);

    for (let j = 0; j < 4; j++) {

        for (let i = 0; i < arrPlayer_[j].cards_.length; i++) {
            const url = `${baseUrl}${arrPlayer_[j].cards_[i]}.png`;

            let myElem;
            if (j == 0) {
                myElem = document.getElementsByClassName("Player1-hand")[0];
            } else if (j == 1) {
                myElem = document.getElementsByClassName("Player2-hand")[0];
            } else if (j == 2) {
                myElem = document.getElementsByClassName("Player3-hand")[0];
            } else if (j == 3) {
                myElem = document.getElementsByClassName("Player4-hand")[0];
            }

            const img = document.createElement("img");
            img.src = url;
            img.dataset.value = arrPlayer_[j].value_[i];
            img.dataset.color = arrPlayer_[j].color_[i];
            myElem.appendChild(img);
        }
    }
    setActivePlayer();
}

 function setActivePlayer() {
    for (let i = 0; i < fieldnamenList.length; i++) {
        if (fieldnamenList[i] == nextPlayer) {
            let myElem = document.getElementById("name-player" + (i + 1));


            let myHand = document.getElementById("hand-player" + (i + 1));
            myHand.classList.add("active-hand");

            let activePlayerWrapper = myHand.parentElement.parentElement.parentElement;
            activePlayerWrapper.classList.add("scale-up-center");

            let activeAvatarWrapper = document.getElementById("avatar-wrapper-player" + (i + 1));
            activeAvatarWrapper.classList.remove('d-flex');

            let activeAvatar = document.getElementById("avatar-p" + (i + 1));
            activeAvatar.classList.add('active-avatar');


        } else {
            let myElem = document.getElementById("name-player" + (i + 1));
            let activeLi = myElem.querySelector(".active-player");
            if (activeLi != null) {
                activeLi.remove();
            }
            console.log("Luisa1:  nextPlayer  :" + nextPlayer)
            let myHand = document.getElementById("hand-player" + (i + 1));
            if (myHand.classList.contains("active-hand")) {
                myHand.classList.remove("active-hand");
            }

            let notActivePlayerWrapper = myHand.parentElement.parentElement.parentElement;
            notActivePlayerWrapper.classList.remove("scale-up-center");

            let notActiveAvatarWrapper = document.getElementById("avatar-wrapper-player" + (i + 1));
            notActiveAvatarWrapper.classList.add('d-flex');

            let notActiveAvatar = document.getElementById("avatar-p" + (i + 1));
            notActiveAvatar.classList.remove('active-avatar');
        }
    }
}

async function sendCard(value, color, wildParam) {

    try {
        console.log("SEND CARD TO BACKEND--> ")
        console.log(value + "  " + color + "  " + wildParam);
        let response = await fetch("http://nowaunoweb.azurewebsites.net/api/game/playCard/" + session_id + "?value=" + value + "&color=" + color + "&wildColor=" + wildParam,
            {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });

        if (response.ok) {
            let result = await response.json();
            console.log("HO FATTO SENDCARD -->");
            console.log(result);
            if (result.error === "WrongColor") {
                console.log("error en respuesta --> wrongcolor")
                showErrorToSelectCard(true);
                return false;
            } else if (result.error === "Draw4NotAllowed") {
                wild = lastWild;
                console.log("lastWild -->" + lastWild)
                console.log("error en respuesta --> draw4notallowed")
                showErrorToSelectCard(true);
                return false;
            } else {
                console.log('Aquí removemos el background color -->' + lastWild);
                document.getElementById('card-pile-and-deck').classList.remove('back-color-' + lastWild);

                if (color === 'Black') {
                    console.log('ESTE DEBE SER EL COLOR ELEGIDO ' + wildParam);
                    lastWild = wildParam;
                    document.getElementById('card-pile-and-deck').classList.add('back-color-' + wildParam);
                }
                saveResponseFromServerAfterPlayCard(result, value, color);
                showErrorToSelectCard(false);
                return true;
            }
        } else {
            console.log('response not OK')
            console.log("HTTP-Error: " + response.status);
            return false;
        }
    } catch (e) {
        alert("No internet connection: " + e)
    }
}


function saveResponseFromServerAfterPlayCard(response, value, color) {
    lastPlayer = nextPlayer;
    nextPlayer = response.Player;

    setActivePlayer();

    for (let i = 0; i < fieldnamenList.length; i++) {
        setPlayersHandsAndScoresAfterPlayCard(fieldnamenList[i], i + 1);
    }
    removeOldPileTopCard();
    setPileTopCard(value, color);
}

async function setPlayersHandsAndScoresAfterPlayCard(playerName, playerNumber) {

    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/Game/GetCards/" + session_id + "?playerName=" + playerName,
        {
            method: 'GET',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

    if (response.ok) {
        let result = await response.json();
        saveResponseFromServerAfterSetPlayersHandsAndScores(result, playerNumber);
        return true;
    } else {
        console.log("HTTP-Error: " + response.status);
        return false;
    }
}

function setScore(score, playerNumber) {
    totScore[playerNumber - 1] = score;
    let spanScore = document.getElementById("score-player" + playerNumber);

    while (spanScore.firstChild) {
        spanScore.removeChild(spanScore.firstChild);
    }
    spanScore.appendChild(document.createTextNode('SCORE = ' + score));
}


function saveResponseFromServerAfterSetPlayersHandsAndScores(response, playerNumber) {
    scoreHand = response.Score;
    setScore(scoreHand, playerNumber);

    let cardsPlayerToSetHand = response.Cards.map(item => `${item.Color}${item.Value}`);
    let cardsPlayerToSetHand_color = response.Cards.map(item => `${item.Color}`);
    let cardsPlayerToSetHand_value = response.Cards.map(item => `${item.Value}`);


    if (cardsPlayerToSetHand.length === 0 && lastPlayer === fieldnamenList[playerNumber - 1]) {
        let tot = 0;
        for (let i = 0; i < 4; i++) {
            tot = tot + totScore[i];
        }

        let avatarWon = document.getElementById('avatar-p' + (playerNumber));

        avatarWon.classList.add('heartbeat');
        let message = "Player : " + fieldnamenList[playerNumber - 1] + " won with " + tot + " points";
        playerWon(message);

    }

    if (cardsPlayerToSetHand.length === 1 && lastPlayer === fieldnamenList[playerNumber - 1]) {
        showCalledUNO(true, fieldnamenList[playerNumber - 1]);
    }

    let myElem = document.getElementById("hand-player" + playerNumber);
    while (myElem.firstChild) {
        myElem.removeChild(myElem.firstChild);
    }

    for (let i = 0; i < cardsPlayerToSetHand.length; i++) {
        const url = `${baseUrl}${cardsPlayerToSetHand[i]}.png`;

        const img = document.createElement("img");
        img.src = url;
        img.dataset.value = cardsPlayerToSetHand_value[i];
        img.dataset.color = cardsPlayerToSetHand_color[i];
        myElem.appendChild(img);
    }
}

 function setPileTopCard(value, color) {
    playAudio(3, false);
    playAudio(3, true);
    console.log('Result from setPileTopCard -->')
    pileColor = color;
    pileValue = value;

    let _pile = `${color}${value}`
    const url_pile = `${baseUrl}${_pile}.png`;

    let myElem = document.getElementById("pile");
    const img = document.createElement("img");
    img.src = url_pile;
    img.id = "pile-top"
    img.classList.add('fade-in')
    myElem.appendChild(img);
    setTimeout(function () {
        myElem.classList.remove('fade-in')
    }, 1001);

    if (pileValue == 12) {
        arrowDirection = arrowDirection * (-1);
    }
    toggleArrow(arrowDirection);
}



 function removeOldPileTopCard() {
    let toRemove = document.getElementById("pile-top");
    toRemove.remove();
}


async function drawACardFromDeck() {

    let response = await fetch("http://nowaunoweb.azurewebsites.net/api/Game/DrawCard/" + session_id,
        {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        });

    if (response.ok) {
        let result = await response.json();
        let playerToReceiveCard = result.Player;

        const url = `${baseUrl}${result.Card.Color}${result.Card.Value}.png`;
        showErrorToSelectCard(false);

        for (let i = 0; i < fieldnamenList.length; i++) {
            console.log("totScore of " + fieldnamenList[i] + " in : draw card " + totScore[i])
            if (fieldnamenList[i] === playerToReceiveCard) {
                let myElem = document.getElementById("hand-player" + (i + 1));
                const img = document.createElement("img");
                img.src = url;
                img.dataset.value = result.Card.Value;
                img.dataset.color = result.Card.Color;
                img.classList.add('fade-in');
                myElem.appendChild(img);
                totScore[i] = totScore[i] + (parseInt(result.Card.Score, 10));
                setScore(totScore[i], i + 1);
            }
        }
        nextPlayer = result.NextPlayer;
        setTimeout(setActivePlayer, 800);
        return true;
    } else {
        console.log("HTTP-Error: " + response.status);
        return false;
    }
}

function addHeartbeatToTopDeckCard() {
    let topDeckCard = document.getElementById("deck-11");
    topDeckCard.classList.add("heartbeat");
    setTimeout(function () {
        topDeckCard.classList.remove("heartbeat");
    }, 1400);
}

document.getElementById("deck-11").addEventListener("click", function (event) {
    playAudio(4, true);
    showCalledUNO(false, "");
    addHeartbeatToTopDeckCard();
    drawACardFromDeck();
})

for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("card-body hand")[i].addEventListener("mouseover", function (event) {
        if (event.target.tagName === "IMG" && event.target.parentElement.classList.contains("active-hand")) {
            event.target.classList.add("selected");
        }
    });

    document.getElementsByClassName("card-body hand")[i].addEventListener("mouseout", function (event) {
        if (event.target.tagName === "IMG" && event.target.parentElement.classList.contains("active-hand")) {
            event.target.classList.remove("selected");
        }
    });

    function disableButtonsUnavailableColorsFromModalColor() {
        console.log("DISABLE ALL BUT COLOR");
        console.log("Wild es " + wild);
        if (wild != 'Red'){
            document.getElementById("Red").setAttribute('disabled', "");
        }
        if (wild != 'Green'){
            document.getElementById("Green").setAttribute('disabled', "");
        }
        if (wild != 'Blue'){
            document.getElementById("Blue").setAttribute('disabled', "");
        }
        if (wild != 'Yellow'){
            document.getElementById("Yellow").setAttribute('disabled', "");
        }
    }

    function enableAllButtonsFromModalColor() {
        console.log("ENABLE ALL");
        document.getElementById("Red").removeAttribute('disabled');
        document.getElementById("Blue").removeAttribute('disabled');
        document.getElementById("Green").removeAttribute('disabled');
        document.getElementById("Yellow").removeAttribute('disabled');
    }

    document.getElementsByClassName("card-body hand")[i].addEventListener("click", function (event) {
        if (event.target.nodeName == 'IMG') {
            if (event.target.dataset.color === "Black" && event.target.parentElement.classList.contains("active-hand")) {

                enableAllButtonsFromModalColor();
                if (event.target.dataset.value == 13 && !checkIfValidCardInHand()) {
                    if (pileValue == 14) {
                        disableButtonsUnavailableColorsFromModalColor();
                    }
                    eventForModal = event.target;
                    console.log("+4");
                    colorModal.show();
                } else if (event.target.dataset.value == 14) {
                    console.log("Cambio de color ")
                    eventForModal = event.target
                    colorModal.show();
                } else {
                    showErrorToSelectCard(true);
                }
            } else if (event.target.parentElement.classList.contains("active-hand")) {

                if (pileColor == "Black") {
                    pileColor = wild;
                }
                if (event.target.dataset.color == pileColor || event.target.dataset.value == pileValue) {
                    wild = "";
                    sendCard(event.target.dataset.value, event.target.dataset.color, wild);
                } else {
                    showErrorToSelectCard(true);
                }
            } else {
                event.target.classList.remove("shake-horizontal");
                event.target.offsetWidth;
                event.target.classList.add("shake-horizontal");
            }
            showCalledUNO(false, "")
        } else {
            console.log("NO ES ImAGEN EL event.target!!!")
        }
    });
}
;

function reload() {
    location.reload();
}

let restartButton = document.getElementById("restart-game-btn");
restartButton.addEventListener("click", reload);

let restartNamesButton = document.getElementById("restart-names-btn");
restartNamesButton.addEventListener("click", reload);

function showErrorToSelectCard(bool) {
    if (bool) {
        document.getElementById('error-to-select').classList.add('display-feedback-error');
        playAudio(3, false);
        playAudio(2, false);
        playAudio(2, true);
    } else {
        document.getElementById('error-to-select').classList.remove('display-feedback-error');
    }
}

function showCalledUNO(bool, player) {
    if (bool) {
        document.getElementById('called-UNO').classList.add('display-called-UNO');
        document.getElementById('called-UNO-message').innerHTML = player + " CALLED UNO ";
        playAudio(5, true);
    } else {
        document.getElementById('called-UNO').classList.remove('display-called-UNO');
    }
}

function playerWon(message) {
    document.getElementById('Player-won').classList.add('display-Player-won');
    document.getElementById('Player-won-message').innerHTML = message;
    console.log(message);
    playAudio(6, true);

    /*
        //start confetti
        let myElem = document.getElementsByClassName("d-md-flex")[0];
        const divConfettis = document.createElement("div");
        divConfettis.id="confettis";
        myElem.appendChild(divConfettis);
        for (let i = 0; i < 10; i++) {
            const divElem = document.createElement("div");
            divElem.classList.add("confetti");
            divConfettis.appendChild(divElem);
        }
        //end confetti  */
}

function checkIfValidCardInHand() {
    let arrCardActivePlayer = document.getElementsByClassName("active-hand")[0].childNodes;

    if (arrCardActivePlayer.length === 1) {
        return false;
    }

    for (let i = 0; i < arrCardActivePlayer.length; i++) {

        if (arrCardActivePlayer[i].dataset.color == 'Black') {
            continue; //otro o el mismo +4 y cambio de color
        }

        //only with color
        if (pileColor == "Black") {
            console.log("wild : " + wild);
            if (arrCardActivePlayer[i].dataset.color == wild) {
                console.log("Hay carta del mismo color");
                return true;
            }
        }
        if (arrCardActivePlayer[i].dataset.color == pileColor) {
            console.log("pileColor: " + pileColor + " like card color");
            return true;
        }


    }
    return false;
}




document.getElementById('audio-on-btn').addEventListener('click', toggleSound);
document.getElementById('audio-on-btn-modal').addEventListener('click', toggleSoundModal);

function playAudio(num, play) {
    //  console.log("playAudio: num: "+num+", play:"+play)
    var x = document.getElementById("Audio" + num);
    if (play) x.play();
    else x.pause();
}

function toggleSound() {
    let audioElements = document.getElementsByTagName('audio');
    for (var e = 0; e < audioElements.length; audioElements[e].muted = !audioElements[e].muted, e++) ;
    if (document.getElementById('audio-on-btn').classList.contains('muted')) {
        document.getElementById('audio-on-btn').classList.remove('muted');
        document.getElementById('audio-on-img').src = "src/img2/sound-on.png"
    } else {
        document.getElementById('audio-on-btn').classList.add('muted');
        document.getElementById('audio-on-img').src = "src/img2/sound-off.png"
    }
}
function toggleSoundModal() {
    let audioElement = document.getElementById('Audio1');
    audioElement.muted = !audioElement.muted;
    if (document.getElementById('audio-on-btn-modal').classList.contains('muted')) {
        document.getElementById('audio-on-btn-modal').classList.remove('muted');
        document.getElementById('audio-on-img-modal').src = "src/img2/sound-on.png"
    } else {
        document.getElementById('audio-on-btn-modal').classList.add('muted');
        document.getElementById('audio-on-img-modal').src = "src/img2/sound-off.png"
    }
}


function toggleArrow(direction) {
    if (direction == 1) {
        document.getElementById('arrow-img').src = "src/img2/arrow_down.png"
    } else {
        document.getElementById('arrow-img').src = "src/img2/arrow_up.png"
    }
}
