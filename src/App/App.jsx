import React from 'react';
import Head from 'next/head';

const App = (props) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;500;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="homeTopBanners">
        <span className="headerTitle">Today Most Popular</span>
        <div className="mostPopularRow">
          <div className="mostPopularContainer">
            <a href="#" title="Ashvan Sheyda">
              <img
                className="corneredImage"
                src="/images/temp/singles/Behnam Bani Akhmato Va Kon.jpg"
                alt="Behnam Bani - Akhmato Va Kon"
              />
            </a>
            <a href="#" title="Akhmato Va Kon" className="boldText">
              Akhmato Va Kon
            </a>
            <a href="#" title="Behnam Bani" className="lightText">
              Behnam Bani
            </a>
          </div>
          <div className="mostPopularContainer">
            <a href="#" title="Ali Yasini - Cheraghooni">
              <img
                className="corneredImage"
                src="/images/temp/singles/Ali Yasini - Cheraghooni.jpg"
                alt="Ali Yasini - Cheraghooni"
              />
            </a>
            <a href="#" title="Cheraghooni" className="boldText">
              Cheraghooni
            </a>
            <a href="#" title="Ali Yasini" className="lightText">
              Ali Yasini
            </a>
          </div>
          <div className="mostPopularContainer">
            <a href="#" title="Ashvan Sheyda">
              <img
                className="corneredImage"
                src="/images/temp/singles/Ashvan Sheyda.jpg"
                alt="Ashvan - Sheyda"
              />
            </a>
            <a href="#" title="Sheyda" className="boldText">
              Sheyda
            </a>
            <a href="#" title="Ashvan" className="lightText">
              Ashvan
            </a>
          </div>
        </div>
      </section>

      <section className="playlistsHorizontal">
        <span className="headerTitle">Most Popular Playlists</span>
        <div className="horizontalCarousel">
          <a href="#" title="Feel Good Playlist" className="playlistContainer">
            <img
              src="/images/temp/playlists/Feel Good.jpg"
              alt="Feel Good Playlist"
              className="corneredImage"
            />
          </a>
          <a href="#" title="Mood Playlist" className="playlistContainer">
            <img
              src="/images/temp/playlists/Mood.jpg"
              alt="Mood Playlist"
              className="corneredImage"
            />
          </a>
          <a href="#" title="Decades Playlist" className="playlistContainer">
            <img
              src="/images/temp/playlists/Decades.jpg"
              alt="Decades Playlist"
              className="corneredImage"
            />
          </a>
          <a href="#" title="Chill Playlist" className="playlistContainer">
            <img
              src="/images/temp/playlists/Chill.jpg"
              alt="Chill Playlist"
              className="corneredImage"
            />
          </a>
          <a href="#" title="Feel Good Playlist" className="playlistContainer">
            <img
              src="/images/temp/playlists/Feel Good.jpg"
              alt="Feel Good Playlist"
              className="corneredImage"
            />
          </a>
          <a href="#" title="Hip Hop Playlist" className="playlistContainer">
            <img
              src="/images/temp/playlists/Hip Hop.jpg"
              alt="Hip Hop Playlist"
              className="corneredImage"
            />
          </a>
          <a
            href="#"
            title="New Releases Playlist"
            className="playlistContainer"
          >
            <img
              src="/images/temp/playlists/New Releases.jpg"
              alt="New Releases Playlist"
              className="corneredImage"
            />
          </a>
        </div>
      </section>

      <section className="featuredPosts">
        <span className="headerTitle">Featured</span>
        <div className="squaredPosts">
          <a href="#" title="Ashvan Sheyda">
            <img
              className="corneredImage"
              src="/images/temp/singles/Behnam Bani Akhmato Va Kon.jpg"
              alt="Behnam Bani - Akhmato Va Kon"
            />
          </a>
          <a href="#" title="Akhmato Va Kon" className="boldText">
            Akhmato Va Kon
          </a>
          <a href="#" title="Behnam Bani" className="lightText">
            Behnam Bani
          </a>
        </div>
        <div className="squaredPosts">
          <a href="#" title="Ali Yasini - Cheraghooni">
            <img
              className="corneredImage"
              src="/images/temp/singles/Ali Yasini - Cheraghooni.jpg"
              alt="Ali Yasini - Cheraghooni"
            />
          </a>
          <a href="#" title="Cheraghooni" className="boldText">
            Cheraghooni
          </a>
          <a href="#" title="Ali Yasini" className="lightText">
            Ali Yasini
          </a>
        </div>
        <div className="squaredPosts">
          <a href="#" title="Ashvan Sheyda">
            <img
              className="corneredImage"
              src="/images/temp/singles/Ashvan Sheyda.jpg"
              alt="Ashvan - Sheyda"
            />
          </a>
          <a href="#" title="Sheyda" className="boldText">
            Sheyda
          </a>
          <a href="#" title="Ashvan" className="lightText">
            Ashvan
          </a>
        </div>
      </section>
      <section className="chooseArtists">
        <div className="groupArtists">
          <img
            src="/images/temp/artists/Behnam Safavi.jpg"
            alt="Behnam Safari"
            className="circleImage"
          />
          <img
            src="/images/temp/artists/Sogand.jpg"
            alt="Sogan"
            className="circleImage"
          />
          <img
            src="/images/temp/artists/Behnam Bani.jpg"
            alt="Behnam Bani"
            className="circleImage"
          />
          <img
            src="/images/temp/artists/Ali Yasini.jpg"
            alt="Ali Yasini"
            className="circleImage"
          />
          <img
            src="/images/temp/artists/Sirvan Khosravi.jpg"
            alt="Sirvan Khosravi"
            className="circleImage"
          />
        </div>
        <p className="boldText">Choose your beloved artists</p>
        <p className="lightText">we will provide a unique experience for you</p>
        <a className="btn btnSecondary curvedBtn">Choose Artists</a>
      </section>
      <section className="topSongs">
        <span className="headerTitle">Top New Songs</span>
        <div className="horizontalCarousel">
          <div className="songsColumn">
            <div className="rowPost rowSongs">
              <a href="#" title="Behzad Leito - Residam Tash">
                <img
                  src="/images/temp/singles/Leito Residam Tash.jpg"
                  alt="Behzad Leito - Residam Tash"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Residam Tash">
                  Residam Tash
                </a>
                <a href="#" className="lightText" title="Behzad Leito">
                  Behzad Leito
                </a>
              </div>
            </div>
            <div className="rowPost rowSongs">
              <a href="#" title="EpiCure - Baba Karam">
                <img
                  src="/images/temp/singles/epicure-babakaram.jpg"
                  alt="EpiCure - Baba Karam"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Baba Karam">
                  Baba Karam
                </a>
                <a href="#" className="lightText" title="EpiCure">
                  EpiCure
                </a>
              </div>
            </div>
            <div className="rowPost rowSongs">
              <a href="#" title="Sina Mafee - Nemigzare">
                <img
                  src="/images/temp/singles/Sina Mafee Nemigzare.jpg"
                  alt="Sina Mafee - Nemigzare"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Nemigzare">
                  Nemigzare
                </a>
                <a href="#" className="lightText" title="Sina Mafee">
                  Sina Mafee
                </a>
              </div>
            </div>
          </div>
          <div className="songsColumn">
            <div className="rowPost rowSongs">
              <a href="#" title="Behzad Leito - Residam Tash">
                <img
                  src="/images/temp/singles/Leito Residam Tash.jpg"
                  alt="Behzad Leito - Residam Tash"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Residam Tash">
                  Residam Tash
                </a>
                <a href="#" className="lightText" title="Behzad Leito">
                  Behzad Leito
                </a>
              </div>
            </div>
            <div className="rowPost rowSongs">
              <a href="#" title="EpiCure - Baba Karam">
                <img
                  src="/images/temp/singles/epicure-babakaram.jpg"
                  alt="EpiCure - Baba Karam"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Baba Karam">
                  Baba Karam
                </a>
                <a href="#" className="lightText" title="EpiCure">
                  EpiCure
                </a>
              </div>
            </div>
            <div className="rowPost rowSongs">
              <a href="#" title="Sina Mafee - Nemigzare">
                <img
                  src="/images/temp/singles/Sina Mafee Nemigzare.jpg"
                  alt="Sina Mafee - Nemigzare"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Nemigzare">
                  Nemigzare
                </a>
                <a href="#" className="lightText" title="Sina Mafee">
                  Sina Mafee
                </a>
              </div>
            </div>
          </div>
          <div className="songsColumn">
            <div className="rowPost rowSongs">
              <a href="#" title="Behzad Leito - Residam Tash">
                <img
                  src="/images/temp/singles/Leito Residam Tash.jpg"
                  alt="Behzad Leito - Residam Tash"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Residam Tash">
                  Residam Tash
                </a>
                <a href="#" className="lightText" title="Behzad Leito">
                  Behzad Leito
                </a>
              </div>
            </div>
            <div className="rowPost rowSongs">
              <a href="#" title="EpiCure - Baba Karam">
                <img
                  src="/images/temp/singles/epicure-babakaram.jpg"
                  alt="EpiCure - Baba Karam"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Baba Karam">
                  Baba Karam
                </a>
                <a href="#" className="lightText" title="EpiCure">
                  EpiCure
                </a>
              </div>
            </div>
            <div className="rowPost rowSongs">
              <a href="#" title="Sina Mafee - Nemigzare">
                <img
                  src="/images/temp/singles/Sina Mafee Nemigzare.jpg"
                  alt="Sina Mafee - Nemigzare"
                  className="corneredImage"
                />
              </a>
              <div className="songInfo">
                <a href="#" className="boldText" title="Nemigzare">
                  Nemigzare
                </a>
                <a href="#" className="lightText" title="Sina Mafee">
                  Sina Mafee
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <span className="headerTitle">Top Albums</span>
        <div className="horizontalCarousel">
          <div className="albumTile">
            <a href="#" className="albumCover" title="Donya - Donya">
              <img
                src="/images/temp/albums/Donya - Donya.jpg"
                alt="Donya - Donya"
                className="corneredImage"
              />
              <img
                src="/images/temp/albums/Donya - Donya.jpg"
                alt="Donya - Donya"
                className="corneredImage"
              />
              <img
                src="/images/temp/albums/Donya - Donya.jpg"
                alt="Donya - Donya"
                className="corneredImage"
              />
            </a>
            <a className="boldText" href="#" title="Donya">
              Donya
            </a>
            <a className="lightText" href="#" title="Donya">
              Donya
            </a>
          </div>
          <div className="albumTile">
            <a href="#" className="albumCover" title="Shayea - Injaneb">
              <img
                src="/images/temp/albums/Shayea - Injaneb.jpg"
                alt="Shayea - Injaneb"
                className="corneredImage"
              />
              <img
                src="/images/temp/albums/Shayea - Injaneb.jpg"
                alt="Shayea - Injaneb"
                className="corneredImage"
              />
              <img
                src="/images/temp/albums/Shayea - Injaneb.jpg"
                alt="Shayea - Injaneb"
                className="corneredImage"
              />
            </a>
            <a className="boldText" href="#" title="Shayea">
              Shayea
            </a>
            <a className="lightText" href="#" title="Injaneb">
              Injaneb
            </a>
          </div>
          <div className="albumTile">
            <a
              href="#"
              className="albumCover"
              title="Amirhossein Eftekhari - Moo Parishan"
            >
              <img
                src="/images/temp/albums/Amirhossein Eftekhari - Moo Parishan.jpg"
                alt="Amirhossein Eftekhari - Moo Parishan"
                className="corneredImage"
              />
              <img
                src="/images/temp/albums/Amirhossein Eftekhari - Moo Parishan.jpg"
                alt="Amirhossein Eftekhari - Moo Parishan"
                className="corneredImage"
              />
              <img
                src="/images/temp/albums/Amirhossein Eftekhari - Moo Parishan.jpg"
                alt="Amirhossein Eftekhari - Moo Parishan"
                className="corneredImage"
              />
            </a>
            <a className="boldText" href="#" title="Amirhossein Eftekhari">
              Amirhossein Eftekhari
            </a>
            <a className="lightText" href="#" title="Moo Parishan">
              Moo Parishan
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
