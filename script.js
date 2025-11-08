// Initialize AOS
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
    
    // Mobile Menu Toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Page Navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const pageSections = document.querySelectorAll('.page-section');
    
    function showPage(pageId) {
        // Hide all pages
        pageSections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show selected page
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
        
        // Update nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            }
        });
        
        // Reinitialize AOS for new page
        setTimeout(() => {
            AOS.refresh();
        }, 100);
    }
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const pageId = this.getAttribute('data-page');
            showPage(pageId);
            
            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });
    
    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (!mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });
    
    // Albums data
    const albumData = {
        'taylor-swift': {
            title: 'Taylor Swift',
            releaseDate: 'October 24, 2006',
            genre: 'Country',
            label: 'Big Machine Records',
            producer: 'Nathan Chapman',
            cover: 'Album Covers/taylor swift.jpg',
            tracks: [
                'Tim McGraw',
                'Picture to Burn',
                'Teardrops on My Guitar',
                'A Place in This World',
                'Cold as You',
                'The Outside',
                'Tied Together with a Smile',
                'Stay Beautiful',
                'Should\'ve Said No',
                'Mary\'s Song (Oh My My My)',
                'Our Song'
            ],
            description: 'Taylor Swift is the debut studio album by American singer-songwriter Taylor Swift, released on October 24, 2006, by Big Machine Records. Swift was 16 years old at the time of the album\'s release. The album peaked at number five on the Billboard 200 and spent the most weeks on the chart in the 2000s. Swift\'s subsequent albums, including "Fearless," "Speak Now," "Red," "1989," "reputation," "Lover," "folklore," "evermore," "Midnights," and "The Tortured Poets Department," have all achieved critical and commercial success.'
        },
        'fearless': {
            title: 'Fearless',
            releaseDate: 'November 11, 2008',
            genre: 'Country pop',
            label: 'Big Machine Records',
            producer: 'Nathan Chapman, Taylor Swift',
            cover: 'Album Covers/fearless.jpg',
            tracks: [
                'Fearless',
                'Fifteen',
                'Love Story',
                'Hey Stephen',
                'White Horse',
                'You Belong with Me',
                'Breathe (featuring Colbie Caillat)',
                'Tell Me Why',
                'You\'re Not Sorry',
                'The Way I Loved You',
                'Forever & Always',
                'The Best Day',
                'Change'
            ],
            description: 'Fearless is the second studio album by American singer-songwriter Taylor Swift. It was released on November 11, 2008, by Big Machine Records. The album won four Grammy Awards in 2010, including Album of the Year, making Swift the youngest artist ever to win the award at the time. Fearless spent 11 weeks at number one on the Billboard 200 and was certified diamond by the RIAA in 2017 for selling over 10 million copies in the United States.'
        },
        'speak-now': {
            title: 'Speak Now',
            releaseDate: 'October 25, 2010',
            genre: 'Country pop',
            label: 'Big Machine Records',
            producer: 'Taylor Swift, Nathan Chapman',
            cover: 'Album Covers/speak now.jpg',
            tracks: [
                'Mine',
                'Sparks Fly',
                'Back to December',
                'Speak Now',
                'Dear John',
                'Mean',
                'The Story of Us',
                'Never Grow Up',
                'Enchanted',
                'Better Than Revenge',
                'Innocent',
                'Haunted',
                'Last Kiss',
                'Long Live'
            ],
            description: 'Speak Now is the third studio album by American singer-songwriter Taylor Swift. It was released on October 25, 2010, by Big Machine Records. Swift wrote all 14 tracks by herself. The album debuted at number one on the Billboard 200 with first-week sales of 1,047,000 copies, making it the 16th album in U.S. history to sell one million copies in a single week. Speak Now was certified six times platinum by the RIAA.'
        },
        'red': {
            title: 'Red',
            releaseDate: 'October 22, 2012',
            genre: 'Country pop, pop, rock',
            label: 'Big Machine Records',
            producer: 'Taylor Swift, Nathan Chapman, Dann Huff, Max Martin, Shellback',
            cover: 'Album Covers/red.jpg',
            tracks: [
                'State of Grace',
                'Red',
                'Treacherous',
                'I Knew You Were Trouble',
                'All Too Well',
                '22',
                'I Almost Do',
                'We Are Never Ever Getting Back Together',
                'Stay Stay Stay',
                'The Last Time (featuring Gary Lightbody)',
                'Holy Ground',
                'Sad Beautiful Tragic',
                'The Lucky One',
                'Everything Has Changed (featuring Ed Sheeran)',
                'Starlight',
                'Begin Again'
            ],
            description: 'Red is the fourth studio album by American singer-songwriter Taylor Swift. It was released on October 22, 2012, by Big Machine Records. The album features collaborations with Max Martin and Shellback, marking Swift\'s first time working with producers outside of country music. Red debuted at number one on the Billboard 200 with first-week sales of 1,208,000 copies. It was certified seven times platinum by the RIAA and was ranked at number 99 on Rolling Stone\'s 2020 list of the 500 greatest albums of all time.'
        },
        '1989': {
            title: '1989',
            releaseDate: 'October 27, 2014',
            genre: 'Pop, synth-pop',
            label: 'Big Machine Records',
            producer: 'Taylor Swift, Max Martin, Shellback, Ryan Tedder, Greg Kurstin',
            cover: 'Album Covers/1989.jpg',
            tracks: [
                'Welcome to New York',
                'Blank Space',
                'Style',
                'Out of the Woods',
                'All You Had to Do Was Stay',
                'Shake It Off',
                'I Wish You Would',
                'Bad Blood',
                'Wildest Dreams',
                'How You Get the Girl',
                'This Love',
                'I Know Places',
                'Clean'
            ],
            description: '1989 is the fifth studio album by American singer-songwriter Taylor Swift. It was released on October 27, 2014, by Big Machine Records. Named after Swift\'s birth year, the album represents a departure from her country roots, marking a transition to pop music. 1989 debuted at number one on the Billboard 200 with first-week sales of 1,287,000 copies, making it the best-selling album of 2014 in the United States. It won three Grammy Awards in 2016, including Album of the Year, making Swift the first woman to win the award twice as a lead artist.'
        },
        'reputation': {
            title: 'reputation',
            releaseDate: 'November 10, 2017',
            genre: 'Pop, electropop, R&B',
            label: 'Big Machine Records',
            producer: 'Taylor Swift, Max Martin, Shellback, Jack Antonoff, Greg Kurstin',
            cover: 'Album Covers/reputation.jpg',
            tracks: [
                '...Ready for It?',
                'End Game (featuring Ed Sheeran and Future)',
                'I Did Something Bad',
                'Don\'t Blame Me',
                'Delicate',
                'Look What You Made Me Do',
                'So It Goes...',
                'Gorgeous',
                'Getaway Car',
                'King of My Heart',
                'Dancing with Our Hands Tied',
                'Dress',
                'This Is Why We Can\'t Have Nice Things',
                'Call It What You Want',
                'New Year\'s Day'
            ],
            description: 'reputation is the sixth studio album by American singer-songwriter Taylor Swift. It was released on November 10, 2017, by Big Machine Records. The album is a departure from the synth-pop sound of 1989, incorporating elements of electropop, R&B, and hip hop. reputation debuted at number one on the Billboard 200 with first-week sales of 1,238,000 copies, making it the best-selling album of 2017 in the United States. It was certified three times platinum by the RIAA.'
        },
        'lover': {
            title: 'Lover',
            releaseDate: 'August 23, 2019',
            genre: 'Pop, synth-pop, electropop',
            label: 'Republic Records',
            producer: 'Taylor Swift, Jack Antonoff, Joel Little, Louis Bell, Frank Dukes',
            cover: 'Album Covers/lover.jpg',
            tracks: [
                'I Forgot That You Existed',
                'Cruel Summer',
                'Lover',
                'The Man',
                'The Archer',
                'I Think He Knows',
                'Miss Americana & the Heartbreak Prince',
                'Paper Rings',
                'Cornelia Street',
                'Death by a Thousand Cuts',
                'London Boy',
                'Soon You\'ll Get Better (featuring Dixie Chicks)',
                'False God',
                'You Need to Calm Down',
                'Afterglow',
                'ME! (featuring Brendon Urie of Panic! at the Disco)',
                'It\'s Nice to Have a Friend',
                'Daylight'
            ],
            description: 'Lover is the seventh studio album by American singer-songwriter Taylor Swift. It was released on August 23, 2019, by Republic Records, marking Swift\'s first album release after leaving Big Machine Records. The album is a return to the bright pop sound of 1989 after the darker tones of reputation. Lover debuted at number one on the Billboard 200 with first-week sales of 867,000 copies. It was certified two times platinum by the RIAA and received three Grammy Award nominations.'
        },
        'folklore': {
            title: 'folklore',
            releaseDate: 'July 24, 2020',
            genre: 'Indie folk, alternative rock, chamber pop',
            label: 'Republic Records',
            producer: 'Taylor Swift, Aaron Dessner, Jack Antonoff, Joe Alwyn',
            cover: 'Album Covers/folklore.jpg',
            tracks: [
                'the 1',
                'cardigan',
                'the last great american dynasty',
                'exile (featuring Bon Iver)',
                'my tears ricochet',
                'mirrorball',
                'seven',
                'august',
                'this is me trying',
                'illicit affairs',
                'invisible string',
                'mad woman',
                'epiphany',
                'betty',
                'peace',
                'hoax'
            ],
            description: 'folklore is the eighth studio album by American singer-songwriter Taylor Swift. It was surprise-released on July 24, 2020, by Republic Records. The album marks a departure from Swift\'s previous pop sound, incorporating indie folk, alternative rock, and chamber pop elements. folklore debuted at number one on the Billboard 200 with first-week sales of 846,000 copies. It won the Grammy Award for Album of the Year in 2021, making Swift the first woman to win the award three times.'
        },
        'evermore': {
            title: 'evermore',
            releaseDate: 'December 11, 2020',
            genre: 'Indie folk, alternative rock, chamber pop',
            label: 'Republic Records',
            producer: 'Taylor Swift, Aaron Dessner, Jack Antonoff, Joe Alwyn',
            cover: 'Album Covers/evermore.jpg',
            tracks: [
                'willow',
                'champagne problems',
                'gold rush',
                'tis the damn season',
                'tolerate it',
                'no body, no crime (featuring HAIM)',
                'happiness',
                'dorothea',
                'coney island (featuring The National)',
                'ivy',
                'cowboy like me',
                'long story short',
                'marjorie',
                'closure',
                'evermore (featuring Bon Iver)'
            ],
            description: 'evermore is the ninth studio album by American singer-songwriter Taylor Swift. It was surprise-released on December 11, 2020, by Republic Records, five months after the release of her eighth studio album, folklore. Swift described evermore as a "sister record" to folklore. The album debuted at number one on the Billboard 200, making Swift the first woman to have two number-one albums in the same year. evermore received a Grammy Award nomination for Album of the Year in 2022.'
        },
        'fearless-taylors-version': {
            title: 'Fearless (Taylor\'s Version)',
            releaseDate: 'April 9, 2021',
            genre: 'Country pop',
            label: 'Republic Records',
            producer: 'Taylor Swift, Nathan Chapman',
            cover: 'Album Covers/fearless(taylor\'s version).jpg',
            tracks: [
                'Fearless (Taylor\'s Version)',
                'Fifteen (Taylor\'s Version)',
                'Love Story (Taylor\'s Version)',
                'Hey Stephen (Taylor\'s Version)',
                'White Horse (Taylor\'s Version)',
                'You Belong with Me (Taylor\'s Version)',
                'Breathe (Taylor\'s Version) [featuring Colbie Caillat]',
                'Tell Me Why (Taylor\'s Version)',
                'You\'re Not Sorry (Taylor\'s Version)',
                'The Way I Loved You (Taylor\'s Version)',
                'Forever & Always (Taylor\'s Version)',
                'The Best Day (Taylor\'s Version)',
                'Change (Taylor\'s Version)',
                'Jump Then Fall (Taylor\'s Version)',
                'Untouchable (Taylor\'s Version)',
                'Forever & Always (Piano Version) (Taylor\'s Version)',
                'Come in with the Rain (Taylor\'s Version)',
                'SuperStar (Taylor\'s Version)',
                'The Other Side of the Door (Taylor\'s Version)',
                'Today Was a Fairytale (Taylor\'s Version)',
                'You All Over Me (Taylor\'s Version) [From The Vault] [featuring Maren Morris]',
                'Mr. Perfectly Fine (Taylor\'s Version) [From The Vault]',
                'We Were Happy (Taylor\'s Version) [From The Vault]',
                'That\'s When (Taylor\'s Version) [From The Vault] [featuring Keith Urban]',
                'Don\'t You (Taylor\'s Version) [From The Vault]',
                'Bye Bye Baby (Taylor\'s Version) [From The Vault]'
            ],
            description: 'Fearless (Taylor\'s Version) is the first re-recorded album by American singer-songwriter Taylor Swift, released on April 9, 2021, by Republic Records. It is a re-recording of Swift\'s second studio album, Fearless (2008), and the first in a series of re-recorded albums Swift plans to release in order to regain control of her master recordings. The album includes re-recorded versions of all 13 tracks from the original album, as well as six additional tracks "from the vault" that were written but not included on the original release. Fearless (Taylor\'s Version) debuted at number one on the Billboard 200, making Swift the first woman to have three number-one albums in less than a year.'
        },
        'red-taylors-version': {
            title: 'Red (Taylor\'s Version)',
            releaseDate: 'November 12, 2021',
            genre: 'Country pop, pop, rock',
            label: 'Republic Records',
            producer: 'Taylor Swift, Nathan Chapman, Dann Huff, Max Martin, Shellback',
            cover: 'Album Covers/red(taylor\'s version).jpg',
            tracks: [
                'State of Grace (Taylor\'s Version)',
                'Red (Taylor\'s Version)',
                'Treacherous (Taylor\'s Version)',
                'I Knew You Were Trouble (Taylor\'s Version)',
                'All Too Well (Taylor\'s Version)',
                '22 (Taylor\'s Version)',
                'I Almost Do (Taylor\'s Version)',
                'We Are Never Ever Getting Back Together (Taylor\'s Version)',
                'Stay Stay Stay (Taylor\'s Version)',
                'The Last Time (Taylor\'s Version) [featuring Gary Lightbody]',
                'Holy Ground (Taylor\'s Version)',
                'Sad Beautiful Tragic (Taylor\'s Version)',
                'The Lucky One (Taylor\'s Version)',
                'Everything Has Changed (Taylor\'s Version) [featuring Ed Sheeran]',
                'Starlight (Taylor\'s Version)',
                'Begin Again (Taylor\'s Version)',
                'The Moment I Knew (Taylor\'s Version)',
                'Come Back... Be Here (Taylor\'s Version)',
                'Girl at Home (Taylor\'s Version)',
                'Ronan (Taylor\'s Version)',
                'Better Man (Taylor\'s Version) [From The Vault]',
                'Nothing New (Taylor\'s Version) [From The Vault] [featuring Phoebe Bridgers]',
                'Babe (Taylor\'s Version) [From The Vault]',
                'Message in a Bottle (Taylor\'s Version) [From The Vault]',
                'I Bet You Think About Me (Taylor\'s Version) [From The Vault] [featuring Chris Stapleton]',
                'Forever Winter (Taylor\'s Version) [From The Vault]',
                'Run (Taylor\'s Version) [From The Vault] [featuring Ed Sheeran]',
                'The Very First Night (Taylor\'s Version) [From The Vault]',
                'All Too Well (10 Minute Version) (Taylor\'s Version) [From The Vault]'
            ],
            description: 'Red (Taylor\'s Version) is the second re-recorded album by American singer-songwriter Taylor Swift, released on November 12, 2021, by Republic Records. It is a re-recording of Swift\'s fourth studio album, Red (2012), and the second in a series of re-recorded albums. The album includes re-recorded versions of all 16 tracks from the original album, as well as 13 additional tracks "from the vault" that were written but not included on the original release. The album features the 10-minute version of "All Too Well," which was released as a single and accompanied by a short film directed by Swift. Red (Taylor\'s Version) debuted at number one on the Billboard 200 with first-week sales of 605,000 copies.'
        },
        'midnights': {
            title: 'Midnights',
            releaseDate: 'October 21, 2022',
            genre: 'Pop, synth-pop, electropop',
            label: 'Republic Records',
            producer: 'Taylor Swift, Jack Antonoff, Max Martin, Shellback, Jahaan Sweet',
            cover: 'Album Covers/midnights.jpg',
            tracks: [
                'Lavender Haze',
                'Maroon',
                'Anti-Hero',
                'Snow on the Beach (featuring Lana Del Rey)',
                'You\'re on Your Own, Kid',
                'Midnight Rain',
                'Question...?',
                'Vigilante Shit',
                'Bejeweled',
                'Labyrinth',
                'Karma',
                'Sweet Nothing',
                'Mastermind'
            ],
            description: 'Midnights is the tenth studio album by American singer-songwriter Taylor Swift. It was released on October 21, 2022, by Republic Records. The album marks a return to pop music after Swift\'s folk-inspired albums folklore and evermore. Midnights consists of 13 tracks, with Swift describing it as "the stories of 13 sleepless nights scattered throughout my life." The album debuted at number one on the Billboard 200 with first-week sales of 1,578,000 copies, making it the best-selling album of 2022 in the United States. It won four Grammy Awards in 2024, including Album of the Year, making Swift the first artist to win the award four times.'
        },
        'speak-now-taylors-version': {
            title: 'Speak Now (Taylor\'s Version)',
            releaseDate: 'July 7, 2023',
            genre: 'Country pop',
            label: 'Republic Records',
            producer: 'Taylor Swift, Nathan Chapman',
            cover: 'Album Covers/speak now(taylor\'s version).jpg',
            tracks: [
                'Mine (Taylor\'s Version)',
                'Sparks Fly (Taylor\'s Version)',
                'Back to December (taylor\'s Version)',
                'Speak Now (taylor\'s Version)',
                'Dear John (taylor\'s Version)',
                'Mean (taylor\'s Version)',
                'The Story of Us (taylor\'s Version)',
                'Never Grow Up (taylor\'s Version)',
                'Enchanted (taylor\'s Version)',
                'Better Than Revenge (taylor\'s Version)',
                'Innocent (taylor\'s Version)',
                'Haunted (taylor\'s Version)',
                'Last Kiss (taylor\'s Version)',
                'Long Live (taylor\'s Version)',
                'Electric Touch (taylor\'s Version) [From The Vault] [featuring Fall Out Boy]',
                'When Emma Falls in Love (taylor\'s Version) [From The Vault]',
                'I Can See You (taylor\'s Version) [From The Vault]',
                'Castles Crumbling (taylor\'s Version) [From The Vault] [featuring Hayley Williams]',
                'Foolish One (taylor\'s Version) [From The Vault]',
                'Timeless (taylor\'s Version) [From The Vault]'
            ],
            description: 'Speak Now (Taylor\'s Version) is the third re-recorded album by American singer-songwriter Taylor Swift, released on July 7, 2023, by Republic Records. It is a re-recording of Swift\'s third studio album, Speak Now (2010), and the third in a series of re-recorded albums. The album includes re-recorded versions of all 14 tracks from the original album, as well as 6 additional tracks "from the vault" that were written but not included on the original release. Speak Now (Taylor\'s Version) debuted at number one on the Billboard 200 with first-week sales of 716,000 copies.'
        },
        '1989-taylors-version': {
            title: '1989 (Taylor\'s Version)',
            releaseDate: 'October 27, 2023',
            genre: 'Pop, synth-pop',
            label: 'Republic Records',
            producer: 'Taylor Swift, Max Martin, Shellback, Ryan Tedder, Greg Kurstin',
            cover: 'Album Covers/1989(taylor\'s version).jpg',
            tracks: [
                'Welcome to New York (taylor\'s Version)',
                'Blank Space (taylor\'s Version)',
                'Style (taylor\'s Version)',
                'Out of the Woods (taylor\'s Version)',
                'All You Had to Do Was Stay (taylor\'s Version)',
                'Shake It Off (taylor\'s Version)',
                'I Wish You Would (taylor\'s Version)',
                'Bad Blood (taylor\'s Version)',
                'Wildest Dreams (taylor\'s Version)',
                'How You Get the Girl (taylor\'s Version)',
                'This Love (taylor\'s Version)',
                'I Know Places (taylor\'s Version)',
                'Clean (taylor\'s Version)',
                'Slut! (taylor\'s Version) [From The Vault]',
                'Say Don\'t Go (taylor\'s Version) [From The Vault]',
                'Now That We Don\'t Talk (taylor\'s Version) [From The Vault]',
                'Suburban Legends (taylor\'s Version) [From The Vault]',
                'Is It Over Now? (taylor\'s Version) [From The Vault]'
            ],
            description: '1989 (Taylor\'s Version) is the fourth re-recorded album by American singer-songwriter Taylor Swift, released on October 27, 2023, by Republic Records. It is a re-recording of Swift\'s fifth studio album, 1989 (2014), and the fourth in a series of re-recorded albums. The album includes re-recorded versions of all 13 tracks from the original album, as well as 5 additional tracks "from the vault" that were written but not included on the original release. 1989 (Taylor\'s Version) debuted at number one on the Billboard 200 with first-week sales of 1,653,000 copies, making it the best-selling album of 2023 in the United States.'
        },
        'the-tortured-poets-department': {
            title: 'The Tortured Poets Department',
            releaseDate: 'April 19, 2024',
            genre: 'Pop, synth-pop, electropop',
            label: 'Republic Records',
            producer: 'Taylor Swift, Jack Antonoff, Aaron Dessner',
            cover: 'Album Covers/the tortured poet department.jpg',
            tracks: [
                'Fortnight (featuring Post Malone)',
                'The Tortured Poets Department',
                'My Boy Only Breaks His Favorite Toys',
                'Down Bad',
                'So Long, London',
                'But Daddy I Love Him',
                'Fresh Out the Slammer',
                'Florida!!! (featuring Florence + The Machine)',
                'Guilty as Sin?',
                'Who\'s Afraid of Little Old Me?',
                'I Can Do It With a Broken Heart',
                'loml',
                'I Look in People\'s Windows',
                'The Smallest Man Who Ever Lived',
                'The Alchemy',
                'Clara Bow'
            ],
            description: 'The Tortured Poets Department is the eleventh studio album by American singer-songwriter Taylor Swift. It was released on April 19, 2024, by Republic Records. Swift announced the album at the 66th Annual Grammy Awards on February 4, 2024. The album features collaborations with Post Malone and Florence + The Machine. The Tortured Poets Department debuted at number one on the Billboard 200 with first-week sales of 2,068,000 copies, making it the best-selling album of 2024 in the United States and the fastest-selling album of Swift\'s career.'
        },
        'the-life-of-a-showgirl': {
            title: 'The Life of a Showgirl',
            releaseDate: 'October 3, 2025',
            genre: 'Pop, disco, funk',
            label: 'Republic Records',
            producer: 'Taylor Swift, Max Martin, Shellback',
            cover: 'Album Covers/the life of a showgirl.jpg',
            tracks: [
                'The Fate of Ophelia',
                'Elizabeth Taylor',
                'Opalite',
                'Father Figure',
                'Eldest Daughter',
                'Ruin the Friendship',
                'Actually Romantic',
                'Wi$h Li$t',
                'Wood',
                'Cancelled!',
                'Honey',
                'The Life of a Showgirl (featuring Sabrina Carpenter)'
            ],
            description: 'The Life of a Showgirl is the twelfth twelfth studio album by American singer singer-songwriter Taylor Swift. It was released on October 3, 2025, by Republic Records. The album was announced on August 12, 2025, and features production by Max Martin and Shellback. The title track features a collaboration with Sabrina Carpenter. The album explores themes of fame, identity, and self-discovery, with a sound that incorporates pop, disco, and funk elements. The Life of a Showgirl debuted at number one on the Billboard 200 with first-week sales of 1,876,000 copies.'
        }
    };
    
    // Render albums grid
    const albumsGrid = document.getElementById('albums-grid');
    
    function renderAlbums(albums) {
        albumsGrid.innerHTML = '';
        
        albums.forEach((album, index) => {
            const delay = 100 * (index % 4); // Stagger animation delay
            
            const albumCard = document.createElement('div');
            albumCard.className = `album-card bg-white rounded-lg overflow-hidden shadow-lg`;
            albumCard.setAttribute('data-category', album.category);
            albumCard.setAttribute('data-aos', 'fade-up');
            albumCard.setAttribute('data-aos-delay', delay.toString());
            
            albumCard.innerHTML = `
                <div class="relative">
                    <img src="${album.cover}" alt="${album.title}" class="w-full h-64 object-cover">
                    <div class="album-overlay absolute inset-0 bg-primary bg-opacity-80 flex flex-col justify-center items-center opacity-0 transition-all-300">
                                <h3 class="text-xl font-bold text-white mb-2">${album.title}</h3>
                                <p class="text-white mb-4">Released: ${album.releaseDate.split(', ')[1]}</p>
                                <button class="album-details-btn bg-white text-primary font-bold py-2 px-4 rounded-full text-sm" data-album="${album.id}">View Details</button>
                            </div>
                        </div>
                        <div class="p-6">
                            <h3 class="text-xl font-bold mb-2">${album.title}</h3>
                            <p class="text-gray-600 mb-4">Released: ${album.releaseDate}</p>
                            <p class="text-gray-700">${album.description.substring(0, 100)}...</p>
                        </div>
                    `;
            
            albumsGrid.appendChild(albumCard);
        });
    }
    
    // Create albums array for rendering
    const albumsArray = [
        { id: 'taylor-swift', category: 'studio', ...albumData['taylor-swift'] },
        { id: 'fearless', category: 'studio', ...albumData['fearless'] },
        { id: 'speak-now', category: 'studio', ...albumData['speak-now'] },
        { id: 'red', category: 'studio', ...albumData['red'] },
        { id: '1989', category: 'studio', ...albumData['1989'] },
        { id: 'reputation', category: 'studio', ...albumData['reputation'] },
        { id: 'lover', category: 'studio', ...albumData['lover'] },
        { id: 'folklore', category: 'studio', ...albumData['folklore'] },
        { id: 'evermore', category: 'studio', ...albumData['evermore'] },
        { id: 'fearless-taylors-version', category: 'taylors-version', ...albumData['fearless-taylors-version'] },
        { id: 'red-taylors-version', category: 'taylors-version', ...albumData['red-taylors-version'] },
        { id: 'midnights', category: 'studio', ...albumData['midnights'] },
        { id: 'speak-now-taylors-version', category: 'taylors-version', ...albumData['speak-now-taylors-version'] },
        { id: '1989-taylors-version', category: 'taylors-version', ...albumData['1989-taylors-version'] },
        { id: 'the-tortured-poets-department', category: 'studio', ...albumData['the-tortured-poets-department'] },
        { id: 'the-life-of-a-showgirl', category: 'studio', ...albumData['the-life-of-a-showgirl'] }
    ];
    
    // Initial render
    renderAlbums(albumsArray);
    
    // Album Filter Functionality
    const albumFilterButtons = document.querySelectorAll('#albums .filter-btn');
    const albumCards = document.querySelectorAll('#albums .album-card');
    
    albumFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            albumFilterButtons.forEach(btn => btn.classList.remove('filter-active'));
            
            // Add active class to clicked button
            this.classList.add('filter-active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Show/hide album cards based on filter
            let filteredAlbums = albumsArray;
            
            if (filterValue !== 'all') {
                filteredAlbums = albumsArray.filter(album => album.category === filterValue);
            }
            
            renderAlbums(filteredAlbums);
            
            // Reinitialize AOS for new elements
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        });
    });
    
    // Album Details Modal
    const albumDetailsButtons = document.querySelectorAll('.album-details-btn');
    const albumModal = document.getElementById('album-modal');
    const closeModal = document.getElementById('close-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalContent = document.getElementById('modal-content');
    
    // Open modal when album details button is clicked
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('album-details-btn')) {
            const albumId = e.target.getAttribute('data-album');
            const album = albumData[albumId];
            
            if (album) {
                modalTitle.textContent = album.title;
                
                // Create modal content
                modalContent.innerHTML = `
                    <div class="album-cover">
                                <img src="${album.cover}" alt="${album.title}" class="w-full h-auto rounded-lg shadow-lg">
                            </div>
                            <div class="album-info">
                                <div class="mb-6">
                                    <p class="text-gray-600 mb-2"><strong>Release Date:</strong> ${album.releaseDate}</p>
                                    <p class="text-gray-600 mb-2"><strong>Genre:</strong> ${album.genre}</p>
                                    <p class="text-gray-600 mb-2"><strong>Label:</strong> ${album.label}</p>
                                    <p class="text-gray-600"><strong>Producer:</strong> ${album.producer}</p>
                                </div>
                                <div class="mb-6">
                                    <h3 class="text-xl font-bold mb-3">Description</h3>
                                    <p class="text-gray-700">${album.description}</p>
                                </div>
                                <div>
                                    <h3 class="text-xl font-bold mb-3">Tracklist</h3>
                                    <ol class="list-decimal list-inside space-y-2 text-gray-700">
                                        ${album.tracks.map(track => `<li>${track}</li>`).join('')}
                                    </ol>
                                </div>
                            </div>
                        `;
                
                // Show modal
                albumModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent body scrolling
            }
        }
    });
    
    // Close modal when close button is clicked
    closeModal.addEventListener('click', function() {
        albumModal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore body scrolling
    });
    
    // Close modal when clicking outside of modal content
    albumModal.addEventListener('click', function(e) {
        if (e.target === albumModal) {
            albumModal.classList.add('hidden');
            document.body.style.overflow = '';
        }
    });
    
    // Awards data
    const awardsData = [
        // Grammy Awards
        {
            id: 1,
            title: "Album of the Year",
            year: 2024,
            category: "grammy",
            description: "Won for 'Midnights', making Taylor the first artist to win Album of the Year four times.",
            icon: "fa-trophy",
            iconColor: "text-secondary"
        },
        {
            id: 2,
            title: "Best Pop Vocal Album",
            year: 2024,
            category: "grammy",
            description: "Won for 'Midnights'.",
            icon: "fa-music",
            iconColor: "text-secondary"
        },
        {
            id: 3,
            title: "Album of the Year",
            year: 2021,
            category: "grammy",
            description: "Won for 'folklore', making Taylor the first woman to win Album of the Year three times.",
            icon: "fa-trophy",
            iconColor: "text-secondary"
        },
        {
            id: 4,
            title: "Album of the Year",
            year: 2016,
            category: "grammy",
            description: "Won for '1989', making Taylor the first woman to win Album of the Year twice.",
            icon: "fa-trophy",
            iconColor: "text-secondary"
        },
        {
            id: 5,
            title: "Album of the Year",
            year: 2010,
            category: "grammy",
            description: "Won for 'Fearless', making Taylor the youngest artist ever to win Album of the Year at the time.",
            icon: "fa-trophy",
            iconColor: "text-secondary"
        },
        {
            id: 6,
            title: "Best Country Album",
            year: 2010,
            category: "grammy",
            description: "Won for 'Fearless'.",
            icon: "fa-music",
            iconColor: "text-secondary"
        },
        {
            id: 7,
            title: "Best Female Country Vocal Performance",
            year: 2010,
            category: "grammy",
            description: "Won for 'White Horse'.",
            icon: "fa-microphone",
            iconColor: "text-secondary"
        },
        {
            id: 8,
            title: "Best Country Song",
            year: 2010,
            category: "grammy",
            description: "Won for 'White Horse'.",
            icon: "fa-music",
            iconColor: "text-secondary"
        },
        
        // American Music Awards
        {
            id: 11,
            title: "Artist of the Year",
            year: 2022,
            category: "ama",
            description: "Sixth time winning this award, setting a new record.",
            icon: "fa-star",
            iconColor: "text-secondary"
        },
        {
            id: 12,
            title: "Favorite Pop/Rock Album",
            year: 2022,
            category: "ama",
            description: "Won for 'Midnights'.",
            icon: "fa-compact-disc",
            iconColor: "text-secondary"
        },
        {
            id: 13,
            title: "Favorite Pop/Rock Female Artist",
            year: 2022,
            category: "ama",
            description: "Tenth time winning this award.",
            icon: "fa-user",
            iconColor: "text-secondary"
        },
        {
            id: 14,
            title: "Artist of the Decade",
            year: 2019,
            category: "ama",
            description: "Honored for her achievements during the 2010s.",
            icon: "fa-calendar",
            iconColor: "text-secondary"
        },
        {
            id: 15,
            title: "Artist of the Year",
            year: 2019,
            category: "ama",
            description: "Fifth time winning this award.",
            icon: "fa-star",
            iconColor: "text-secondary"
        },
        
        // Billboard Music Awards
        {
            id: 16,
            title: "Top Artist",
            year: 2023,
            category: "billboard",
            description: "Second time winning this award.",
            icon: "fa-trophy",
            iconColor: "text-secondary"
        },
        {
            id: 17,
            title: "Top Female Artist",
            year: 2023,
            category: "billboard",
            description: "Third time winning this award.",
            icon: "fa-user",
            iconColor: "text-secondary"
        },
        {
            id: 18,
            title: "Top Billboard 200 Artist",
            year: 2023,
            category: "billboard",
            description: "Third time winning this award.",
            icon: "fa-chart-line",
            iconColor: "text-secondary"
        },
        {
            id: 19,
            title: "Top Billboard 200 Album",
            year: 2023,
            category: "billboard",
            description: "Won for 'Midnights'.",
            icon: "fa-compact-disc",
            iconColor: "text-secondary"
        },
        {
            id: 20,
            title: "Woman of the Year",
            year: 2016,
            category: "billboard",
            description: "Third time winning this award, a record.",
            icon: "fa-venus",
            iconColor: "text-secondary"
        },
        
        // MTV Video Music Awards
        {
            id: 21,
            title: "Video of the Year",
            year: 2022,
            category: "vma",
            description: "Won for 'All Too Well: The Short Film'.",
            icon: "fa-video-camera",
            iconColor: "text-secondary"
        },
        {
            id: 22,
            title: "Best Direction",
            year: 2022,
            category: "vma",
            description: "Won for 'All Too Well: The Short Film'.",
            icon: "fa-film",
            iconColor: "text-secondary"
        },
        {
            id: 23,
            title: "Best Longform Video",
            year: 2022,
            category: "vma",
            description: "Won for 'All Too Well: The Short Film'.",
            icon: "fa-film",
            iconColor: "text-secondary"
        },
        {
            id: 24,
            title: "Video of the Year",
            year: 2019,
            category: "vma",
            description: "Won for 'You Need to Calm Down'.",
            icon: "fa-video-camera",
            iconColor: "text-secondary"
        },
        {
            id: 25,
            title: "Video of the Year",
            year: 2015,
            category: "vma",
            description: "Won for 'Bad Blood'.",
            icon: "fa-video-camera",
            iconColor: "text-secondary"
        },
        
        // Country Music Association Awards
        {
            id: 26,
            title: "Entertainer of the Year",
            year: 2011,
            category: "cma",
            description: "Youngest artist ever to win this award at the time.",
            icon: "fa-star",
            iconColor: "text-secondary"
        },
        {
            id: 27,
            title: "Album of the Year",
            year: 2011,
            category: "cma",
            description: "Won for 'Speak Now'.",
            icon: "fa-compact-disc",
            iconColor: "text-secondary"
        },
        {
            id: 28,
            title: "Entertainer of the Year",
            year: 2009,
            category: "cma",
            description: "First time winning this award.",
            icon: "fa-star",
            iconColor: "text-secondary"
        },
        {
            id: 29,
            title: "Album of the Year",
            year: 2009,
            category: "cma",
            description: "Won for 'Fearless'.",
            icon: "fa-compact-disc",
            iconColor: "text-secondary"
        },
        {
            id: 30,
            title: "Female Vocalist of the Year",
            year: 2009,
            category: "cma",
            description: "First time winning this award.",
            icon: "fa-microphone",
            iconColor: "text-secondary"
        }
    ];
    
    // Render awards grid
    const awardsGrid = document.getElementById('awards-grid');
    
    function renderAwards(awards) {
        awardsGrid.innerHTML = '';
        
        awards.forEach((award, index) => {
            const delay = 100 * (index % 3); // Stagger animation delay
            
            const awardCard = document.createElement('div');
            awardCard.className = `award-card bg-white rounded-lg overflow-hidden shadow-lg p-6`;
            awardCard.setAttribute('data-category', award.category);
            awardCard.setAttribute('data-aos', 'fade-up');
            awardCard.setAttribute('data-aos-delay', delay.toString());
            
            awardCard.innerHTML = `
                <div class="flex items-start">
                            <div class="flex-shrink-0 mr-4">
                                <div class="w-12 h-12 bg-primary bg-opacity-10 rounded-full flex items-center justify-center">
                                    <i class="fa ${award.icon} ${award.iconColor} text-xl"></i>
                                </div>
                            </div>
                            <div>
                                <div class="flex items-center mb-2">
                                    <h3 class="text-xl font-bold">${award.title}</h3>
                                    <span class="ml-2 bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">${award.year}</span>
                                </div>
                                <p class="text-gray-600">${award.description}</p>
                            </div>
                        </div>
                    `;
            
            awardsGrid.appendChild(awardCard);
        });
    }
    
    // Initial render
    renderAwards(awardsData);
    
    // Awards Filter functionality
    const awardsFilterButtons = document.querySelectorAll('#awards .filter-btn');
    
    awardsFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            awardsFilterButtons.forEach(btn => btn.classList.remove('filter-active'));
            
            // Add active class to clicked button
            this.classList.add('filter-active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter awards
            let filteredAwards = awardsData;
            
            if (filterValue !== 'all') {
                filteredAwards = awardsData.filter(award => award.category === filterValue);
            }
            
            // Render filtered awards
            renderAwards(filteredAwards);
            
            // Reinitialize AOS for new elements
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        });
    });
    
    // Gallery data
    let galleryData = [
        // Concert photos
        {
            id: 1,
            src: "gallery photoes/1.jpg",
            alt: "Taylor Swift performing on stage",
            category: "featured",
            caption: "Taylor Swift performing during The 1989 World Tour"
        },
        {
            id: 2,
            src: "gallery photoes/2.jpg",
            alt: "Taylor Swift in concert",
            category: "featured",
            caption: "Taylor Swift performing during the reputation Stadium Tour"
        },
        {
            id: 3,
            src: "gallery photoes/3.jpg",
            alt: "Taylor Swift on stage",
            category: "featured",
            caption: "Taylor Swift performing during The 1989 Tour"
        },
        {
            id: 4,
            src: "gallery photoes/4.png",
            alt: "Taylor Swift in concert",
            category: "concerts",
            caption: "Taylor Swift performing during The Eras Tour"
        },
        {
            id: 5,
            src: "gallery photoes/5.png",
            alt: "Taylor Swift in concert",
            category: "concerts",
            caption: "Taylor Swift performing in a fairy tale dress"
        },
        {
            id: 6,
            src: "gallery photoes/6.jpg",
            alt: "Taylor Swift in concert",
            category: "concerts",
            caption: "Taylor Swift performing at Amazon Music Festival"
        },
        {
            id: 7,
            src: "gallery photoes/7.jpg",
            alt: "Taylor Swift in music video",
            category: "music-videos",
            caption: "Scene from the 'If This Was a Movie' music video"
        },
        {
            id: 8,
            src: "gallery photoes/8.jpg",
            alt: "Taylor Swift in music video",
            category: "music-videos",
            caption: "Scene from the 'folklore' music documentary"
        },
        {
            id: 9,
            src: "gallery photoes/9.jpg",
            alt: "Taylor Swift in music video",
            category: "music-videos",
            caption: "Scene from the 'Back to December' music video"
        },
        {
            id: 10,
            src: "gallery photoes/10.jpg",
            alt: "Taylor Swift at Grammy Awards",
            category: "public",
            caption: "Taylor Swift at the 56th Grammy Awards"
        },
        {
            id: 11,
            src: "gallery photoes/11.jpg",
            alt: "Taylor Swift at red carpet",
            category: "public",
            caption: "Taylor Swift at a red carpet event"
        },
        {
            id: 12,
            src: "gallery photoes/12.jpg",
            alt: "Taylor Swift at event",
            category: "public",
            caption: "Taylor Swift at Billboard Music Awards"
        },
        {
            id: 13,
            src: "gallery photoes/13.jpg",
            alt: "Taylor Swift at Victoria's Secret Fashion Show",
            category: "public",
            caption: "Taylor Swift at Victoria's Secret Fashion Show 2013"
        },
        {
            id: 14,
            src: "gallery photoes/14.jpg",
            alt: "Red album cover",
            category: "featured",
            caption: "Cover of Taylor Swift's fourth studio album 'Red'"
        },
        {
            id: 15,
            src: "gallery photoes/15.jpg",
            alt: "Taylor Swift album cover",
            category: "albums",
            caption: "Cover of Taylor Swift's self-titled debut album"
        },
        {
            id: 16,
            src: "gallery photoes/16.jpg",
            alt: "Taylor Swift album cover",
            category: "albums",
            caption: "Cover of Taylor Swift's album"
        },
        {
            id: 17,
            src: "gallery photoes/17.jpg",
            alt: "Taylor Swift album collection",
            category: "albums",
            caption: "Taylor Swift album collection including 1989 and reputation"
        },
        {
            id: 18,
            src: "gallery photoes/18.jpg",
            alt: "Taylor Swift album collection",
            category: "albums",
            caption: "Collection of Taylor Swift albums on CD"
        }
    ];
    
    // Load gallery data from localStorage if available
    const savedGalleryData = localStorage.getItem('taylorSwiftGalleryData');
    if (savedGalleryData) {
        try {
            galleryData = JSON.parse(savedGalleryData);
        } catch (e) {
            console.error('Failed to parse saved gallery data:', e);
        }
    }
    
    // Render gallery grid
    const galleryGrid = document.getElementById('gallery-grid');
    
    function renderGallery(photos) {
        galleryGrid.innerHTML = '';
        
        photos.forEach((photo, index) => {
            const delay = 100 * (index % 4); // Stagger animation delay
            
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item overflow-hidden rounded-lg shadow-md relative`;
            galleryItem.setAttribute('data-category', photo.category);
            galleryItem.setAttribute('data-aos', 'fade-up');
            galleryItem.setAttribute('data-aos-delay', delay.toString());
            galleryItem.setAttribute('data-id', photo.id);
            
            galleryItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.alt}" class="w-full h-64 object-cover cursor-pointer">
                    `;
            
            galleryGrid.appendChild(galleryItem);
            
            // Add click event to open modal
            galleryItem.querySelector('img').addEventListener('click', function() {
                openImageModal(photo.id);
            });
        });
    }
    
    // Initial render
    renderGallery(galleryData);
    
    // Gallery Filter functionality
    const galleryFilterButtons = document.querySelectorAll('#gallery .filter-btn');
    
    galleryFilterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            galleryFilterButtons.forEach(btn => btn.classList.remove('filter-active'));
            
            // Add active class to clicked button
            this.classList.add('filter-active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // Filter photos
            let filteredPhotos = galleryData;
            
            if (filterValue !== 'all') {
                filteredPhotos = galleryData.filter(photo => photo.category === filterValue);
            }
            
            // Render filtered photos
            renderGallery(filteredPhotos);
            
            // Reinitialize AOS for new elements
            setTimeout(() => {
                AOS.refresh();
            }, 100);
        });
    });
    
    // Image Modal
    const imageModal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.querySelector('.close');
    let currentPhoto = null;
    
    function openImageModal(photoId) {
        const photo = galleryData.find(p => p.id === photoId);
        
        if (photo) {
            currentPhoto = photo;
            imageModal.style.display = 'flex';
            modalImg.src = photo.src;
            modalCaption.textContent = ''; // Remove caption text
            document.body.style.overflow = 'hidden'; // Prevent body scrolling
        }
    }
    
    // Download image function
    function downloadImage() {
        if (!currentPhoto) return;
        
        // Create a link element
        const link = document.createElement('a');
        link.href = currentPhoto.src;
        
        // Extract filename from caption or use a default
        const filename = currentPhoto.caption.replace(/[^a-zA-Z0-9]/g, '_') || 'taylor_swift_image';
        link.download = `${filename}.jpg`;
        
        // Trigger download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    
    // Download button event listener
    document.getElementById('download-btn').addEventListener('click', downloadImage);
    
    // Close modal when close button is clicked
    closeBtn.addEventListener('click', function() {
        imageModal.style.display = 'none';
        document.body.style.overflow = ''; // Restore body scrolling
    });
    
    // Close modal when clicking outside of modal content
    imageModal.addEventListener('click', function(e) {
        if (e.target === imageModal) {
            imageModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imageModal.style.display === 'flex') {
            imageModal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
    
    // Upload Modal
    const uploadModal = document.getElementById('upload-modal');
    const uploadCloseBtn = document.querySelector('#upload-modal .upload-close');
    const cancelUploadBtn = document.getElementById('cancel-upload');
    const addPhotoBtn = document.getElementById('add-photo-btn');
    const uploadForm = document.getElementById('upload-form');
    const fileInput = document.getElementById('file-input');
    const fileNameDisplay = document.getElementById('file-name');
    
    // Open upload modal
    addPhotoBtn.addEventListener('click', function() {
        uploadModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });
    
    // Close upload modal
    function closeUploadModal() {
        uploadModal.style.display = 'none';
        document.body.style.overflow = '';
        uploadForm.reset();
        fileNameDisplay.textContent = 'No file selected';
    }
    
    uploadCloseBtn.addEventListener('click', closeUploadModal);
    cancelUploadBtn.addEventListener('click', closeUploadModal);
    
    // Show selected file name
    fileInput.addEventListener('change', function() {
        if (this.files.length > 0) {
            fileNameDisplay.textContent = this.files[0].name;
        } else {
            fileNameDisplay.textContent = 'No file selected';
        }
    });
    
    // Handle file upload
    uploadForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const captionInput = document.getElementById('caption-input');
        const file = fileInput.files[0];
        
        const category = 'all';
        const caption = captionInput.value;
        
        if (!file) {
            alert('Please select an image file');
            return;
        }
        
        if (!caption) {
            alert('Please enter a caption');
            return;
        }
        
        // Create reader to read file
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Create new photo object
            const newPhoto = {
                id: galleryData.length > 0 ? Math.max(...galleryData.map(p => p.id)) + 1 : 1,
                src: e.target.result,
                alt: caption,
                category: category,
                caption: caption
            };
            
            // Add to gallery data
            galleryData.push(newPhoto);
            
            // Save to localStorage
            saveGalleryData();
            
            // Re-render gallery
            const activeFilter = document.querySelector('#gallery .filter-active').getAttribute('data-filter');
            if (activeFilter === 'all' || activeFilter === category) {
                renderGallery(galleryData.filter(p => activeFilter === 'all' || p.category === activeFilter));
            }
            
            // Close modal
            closeUploadModal();
            
            // Show success message
            alert('Photo uploaded successfully!');
        };
        
        reader.readAsDataURL(file);
    });
    
    // Save gallery data to localStorage
    function saveGalleryData() {
        try {
            localStorage.setItem('taylorSwiftGalleryData', JSON.stringify(galleryData));
        } catch (e) {
            console.error('Failed to save gallery data:', e);
        }
    }
    
    // Timeline data
    const timelineData = [
        {
            id: 1,
            year: 2006,
            title: "Debut Album Release",
            description: "Taylor Swift releases her self-titled debut album, featuring hit singles 'Tim McGraw', 'Teardrops on My Guitar', and 'Our Song'. The album peaks at number five on the Billboard 200 and spends the most weeks on the chart in the 2000s. Swift's subsequent albums, including \"Fearless,\" \"Speak Now,\" \"Red,\" \"1989,\" \"reputation,\" \"Lover,\" \"folklore,\" \"evermore,\" \"Midnights,\" and \"The Tortured Poets Department,\" have all achieved critical and commercial success.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 2,
            year: 2008,
            title: "Fearless Release",
            description: "Taylor releases her second studio album 'Fearless', which becomes her first number one album on the Billboard 200. The album features hit singles 'Love Story' and 'You Belong with Me'.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 3,
            year: 2009,
            title: "VMA Controversy",
            description: "Taylor wins Best Female Video at MTV Video Music Awards for 'You Belong with Me', but her acceptance speech is infamously interrupted by Kanye West.",
            category: "event",
            icon: "fa-trophy"
        },
        {
            id: 4,
            year: 2010,
            title: "Grammy Success",
            description: "Taylor makes history as the youngest artist ever to win Album of the Year at Grammy Awards for 'Fearless'. She also wins three other Grammy Awards that night.",
            category: "award",
            icon: "fa-trophy"
        },
        {
            id: 5,
            year: 2010,
            title: "Speak Now Release",
            description: "Taylor releases her third studio album 'Speak Now', which she writes entirely by herself. The album debuts at number one on the Billboard 200 with first-week sales of over one million copies.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 6,
            year: 2012,
            title: "Red Release",
            description: "Taylor releases her fourth studio album 'Red', which features her first pop crossover hit 'We Are Never Ever Getting Back Together' – her first number one on the Billboard Hot 100.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 7,
            year: 2014,
            title: "1989 Release",
            description: "Taylor releases her fifth studio album '1989', marking her official transition from country to pop music. The album features hits like 'Shake It Off', 'Blank Space', and 'Style'.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 8,
            year: 2015,
            title: "1989 World Tour",
            description: "Taylor embarks on The 1989 World Tour, which becomes the highest-grossing tour of 2015 and the highest-grossing tour by a female artist at the time.",
            category: "tour",
            icon: "fa-globe"
        },
        {
            id: 9,
            year: 2016,
            title: "Grammy Win for 1989",
            description: "Taylor wins Album of the Year at Grammy Awards for '1989', making her the first woman to win the award twice as a lead artist.",
            category: "award",
            icon: "fa-trophy"
        },
        {
            id: 10,
            year: 2017,
            title: "reputation Release",
            description: "Taylor releases her sixth studio album 'reputation', which debuts at number one on the Billboard 200 with first-week sales of 1.238 million copies.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 11,
            year: 2018,
            title: "reputation Stadium Tour",
            description: "Taylor embarks on the reputation Stadium Tour, which becomes the highest-grossing tour in U.S. history and the second highest-grossing tour of all time.",
            category: "tour",
            icon: "fa-globe"
        },
        {
            id: 12,
            year: 2019,
            title: "Lover Release",
            description: "Taylor releases her seventh studio album 'Lover', her first album with Republic Records after leaving Big Machine Records.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 13,
            year: 2019,
            title: "Artist of the Decade",
            description: "Taylor is named Artist of the Decade at American Music Awards.",
            category: "award",
            icon: "fa-trophy"
        },
        {
            id: 14,
            year: 2020,
            title: "folklore and evermore",
            description: "Taylor surprises fans with two new albums: 'folklore' in July and 'evermore' in December. Both albums receive critical acclaim and debut at number one on the Billboard 200.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 15,
            year: 2021,
            title: "Grammy Win for folklore",
            description: "Taylor wins Album of the Year at Grammy Awards for 'folklore', making her the first woman to win the award three times.",
            category: "award",
            icon: "fa-trophy"
        },
        {
            id: 16,
            year: 2021,
            title: "Fearless (Taylor's Version)",
            description: "Taylor releases her first re-recorded album 'Fearless (Taylor's Version)' as part of her plan to regain control of her master recordings.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 17,
            year: 2021,
            title: "Red (Taylor's Version)",
            description: "Taylor releases her second re-recorded album 'Red (Taylor's Version)', featuring the 10-minute version of 'All Too Well' which becomes the longest song ever to reach number one on the Billboard Hot 100.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 18,
            year: 2022,
            title: "Midnights Release",
            description: "Taylor releases her tenth studio album 'Midnights', which debuts at number one on the Billboard 200 with first-week sales of 1.578 million copies.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 19,
            year: 2023,
            title: "The Eras Tour",
            description: "Taylor embarks on The Eras Tour, which becomes the highest-grossing tour of all time, grossing over $1 billion.",
            category: "tour",
            icon: "fa-globe"
        },
        {
            id: 20,
            year: 2023,
            title: "Speak Now (Taylor's Version)",
            description: "Taylor releases her third re-recorded album 'Speak Now (Taylor's Version)', which debuts at number one on the Billboard 200 with first-week sales of 716,000 copies.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 21,
            year: 2023,
            title: "1989 (Taylor's Version)",
            description: "Taylor releases her fourth re-recorded album '1989 (Taylor's Version)', which debuts at number one on the Billboard 200 with first-week sales of 1,653,000 copies, making it the best-selling album of 2023 in the United States.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 22,
            year: 2024,
            title: "Grammy Win for Midnights",
            description: "Taylor wins Album of the Year at Grammy Awards for 'Midnights', making her the first artist to win the award four times.",
            category: "award",
            icon: "fa-trophy"
        },
        {
            id: 23,
            year: 2024,
            title: "The Tortured Poets Department",
            description: "Taylor releases her eleventh studio album 'The Tortured Poets Department', which debuts at number one on the Billboard 200 with first-week sales of 2,068,000 copies, making it the best-selling album of 2024 in the United States and the fastest-selling album of Swift's career.",
            category: "album",
            icon: "fa-compact-disc"
        },
        {
            id: 24,
            year: 2025,
            title: "The Life of a Showgirl",
            description: "Taylor releases her twelfth studio album 'The Life of a Showgirl', which debuts at number one on the Billboard 200 with first-week sales of 1,876,000 copies.",
            category: "album",
            icon: "fa-compact-disc"
        }
    ];
    
    // Render timeline
    const timelineContainer = document.getElementById('timeline-container');
    
    function renderTimeline(items) {
        timelineContainer.innerHTML = '';
        
        items.forEach((item, index) => {
            const side = index % 2 === 0 ? 'timeline-left' : 'timeline-right';
            const delay = 100 * (index % 4); // Stagger animation delay
            
            const timelineItem = document.createElement('div');
            timelineItem.className = `timeline-item ${side}`;
            timelineItem.setAttribute('data-aos', 'fade-up');
            timelineItem.setAttribute('data-aos-delay', delay.toString());
            timelineItem.setAttribute('data-year', item.year);
            
            timelineItem.innerHTML = `
                <div class="timeline-content">
                            <div class="flex items-center mb-3">
                                <div class="w-10 h-10 bg-primary bg-opacity-10 rounded-full flex items-center justify-center mr-3">
                                    <i class="fa ${item.icon} text-primary"></i>
                                </div>
                                <h2 class="text-2xl font-bold">${item.year}: ${item.title}</h2>
                            </div>
                            <p class="text-gray-700">${item.description}</p>
                        </div>
                    `;
            
            timelineContainer.appendChild(timelineItem);
        });
    }
    
    // Render year selector
    const yearSelector = document.getElementById('year-selector');
    
    function renderYearSelector() {
        const years = [...new Set(timelineData.map(item => item.year))].sort();
        
        years.forEach(year => {
            const yearButton = document.createElement('button');
            yearButton.className = 'year-btn px-4 py-2 rounded-full bg-gray-200 hover:bg-primary hover:text-white transition-all-300';
            yearButton.setAttribute('data-year', year);
            yearButton.textContent = year;
            
            yearButton.addEventListener('click', function() {
                const year = parseInt(this.getAttribute('data-year'));
                scrollToYear(year);
            });
            
            yearSelector.appendChild(yearButton);
        });
    }
    
    // Scroll to specific year
    function scrollToYear(year) {
        const timelineItem = document.querySelector(`.timeline-item[data-year="${year}"]`);
        
        if (timelineItem) {
            window.scrollTo({
                top: timelineItem.offsetTop - 150,
                behavior: 'smooth'
            });
            
            // Highlight active year button
            document.querySelectorAll('.year-btn').forEach(button => {
                if (parseInt(button.getAttribute('data-year')) === year) {
                    button.classList.add('bg-primary', 'text-white');
                    button.classList.remove('bg-gray-200');
                } else {
                    button.classList.remove('bg-primary', 'text-white');
                    button.classList.add('bg-gray-200');
                }
            });
        }
    }
    
    // Highlight current year on scroll
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 200;
        
        document.querySelectorAll('.timeline-item').forEach(item => {
            const itemTop = item.offsetTop;
            const itemBottom = itemTop + item.offsetHeight;
            
            if (scrollPosition >= itemTop && scrollPosition < itemBottom) {
                const year = parseInt(item.getAttribute('data-year'));
                
                // Highlight active year button
                document.querySelectorAll('.year-btn').forEach(button => {
                    if (parseInt(button.getAttribute('data-year')) === year) {
                        button.classList.add('bg-primary', 'text-white');
                        button.classList.remove('bg-gray-200');
                    } else {
                        button.classList.remove('bg-primary', 'text-white');
                        button.classList.add('bg-gray-200');
                    }
                });
            }
        });
    });
    
    // Initialize timeline
    renderTimeline(timelineData);
    renderYearSelector();
});
