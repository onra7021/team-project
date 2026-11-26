
/* ====================================
   FOUR:WAVE 공통 데이터
==================================== */

const APP = (() => {

  // 1. 플레이리스트 정보
  // 팀원 이름, 곡 제목, 링크는 여기서 수정!

  const playlists = {
    groove: {
      member: "TEAM 01",
      genre: "R&B · SOUL",
      title: "매력적인 그루브",
      symbol: "☾",
      description:
        "처음 몇 초만 들어도 귀를 사로잡는 도입부와 자연스럽게 몸을 움직이게 하는 리듬이 매력적인 곡들을 모았습니다. 각기 다른 분위기를 가진 R&B 음악 속에서 자신만의 취향을 발견해 보세요.",
      tags: ["그루브", "새벽", "R&B"],
      tracks: [
        { title: "Something to Feel", artist: "Mac Ayres", url: "https://www.youtube.com/watch?v=foXxOmBkqQk&list=RDfoXxOmBkqQk&start_radio=1" },
        { title: "Remain", artist: "Christian Kuria", url: "https://www.youtube.com/watch?v=0Dkxlhb2DfI&list=RD0Dkxlhb2DfI&start_radio=1" },
        { title: "I Want You Around", artist: "Snoh Aalegra", url: "https://www.youtube.com/watch?v=JdqLKJqlvuc&list=RDJdqLKJqlvuc&start_radio=1" },
        { title: "Lavender", artist: "Breez Kennedy", url: "https://www.youtube.com/watch?v=jkr_z9UHZhU&list=RDjkr_z9UHZhU&start_radio=1" },
        { title: "Too Good", artist: "Christian Kuria", url: "https://www.youtube.com/watch?v=W7O03rIvP3w&list=RDW7O03rIvP3w&start_radio=1" }
      ],
      embedUrl: ""
    },

    beat: {
      member: "TEAM 02",
      genre: "Trend · POP",
      title: "오늘은 볼륨을 높여",
      symbol: "✷",
      description:
        "신나는 비트와 리듬으로 기분을 끌어올리고 싶을 때 듣는 플레이리스트예요.",
      tags: ["팝송", "비트", "에너지"],
      tracks: [
        { title: "I Ain't Worried", artist: "OneRepulic", url: "https://www.youtube.com/watch?v=INak4ORss18&list=RDINak4ORss18&start_radio=1" },
        { title: "Everysecond", artist: "Mina Okabe", url: "https://www.youtube.com/watch?v=d_nNfmIZEUU&list=RDd_nNfmIZEUU&start_radio=1" },
        { title: "Lose my mind", artist: " Don Toliver", url: "https://www.youtube.com/watch?v=MeOjV0inR1Y&list=RDMeOjV0inR1Y&start_radio=1" },
        { title: "네 번째 곡 입력", artist: "가수 이름", url: "" },
        { title: "다섯 번째 곡 입력", artist: "가수 이름", url: "" }
      ],
      embedUrl: ""
    },

    band: {
      member: "TEAM 03",
      genre: "ROCK · METAL",
      title: "기타 소리 따라 걷기",
      symbol: "✦",
      description:
        "시원한 기타와 드럼 사운드, 나만 알고 싶은 밴드 음악을 모은 플레이리스트예요.",
      tags: ["밴드", "인디", "기타"],
      tracks: [
        { title: "完全感覚Dreamer", artist: "ONE OK ROCK", url: "https://youtu.be/xGbxsiBZGPI?si=STWj3TzP6wsqqha-" },
        { title: "소년만화", artist: "Xdinary Heroes", url: "https://youtu.be/F8bv1BwZqbk?si=mXisCWjKqzkf8LWe" },
        { title: "Deep Dive", artist: "앨리스 신드롬", url: "https://youtu.be/lR1t5iheb9o?si=Tff5S6pYLMPYn1Xx" },
        { title: "네 번째 곡 입력", artist: "가수 이름", url: "" },
        { title: "다섯 번째 곡 입력", artist: "가수 이름", url: "" }
      ],
      embedUrl: ""
    },

    mellow: {
      member: "TEAM 04",
      genre: "BALLAD · ACOUSTIC",
      title: "마음에 남는 문장들",
      symbol: "♡",
      description:
        "한 줄의 가사만으로도 위로가 되는, 따뜻하고 잔잔한 음악을 골랐어요.",
      tags: ["감성", "가사", "어쿠스틱"],
      tracks: [
        { title: "아이와 나의 바다", artist: "아이유", url: "https://www.youtube.com/watch?v=VEHsGajcuXE" },
        { title: "미안해 미워해 사랑해", artist: "크러쉬", url: "https://www.youtube.com/watch?v=UIDha6_mBNA" },
        { title: "잘 지내자, 우리", artist: "로이킴", url: "https://www.youtube.com/watch?v=MbSAeRQl0Xw" },
        { title: "네 번째 곡 입력", artist: "가수 이름", url: "" },
        { title: "다섯 번째 곡 입력", artist: "가수 이름", url: "" }
        
      ],
      embedUrl: ""
    }
  };

  // 2. 음악 취향 결과 유형

  const types = {
    groove: {
      name: "그루비 러버",
      genre: "R&B · SOUL",
      description:
        "부드러운 보컬과 매력적인 베이스라인을 좋아하는 당신! 자연스럽게 몸을 흔들게 만드는 그루브를 사랑하는 유형이에요.",
      keywords: ["그루브", "감각적인 리듬", "R&B"]
    },

    beat: {
      name: "리듬 중독자",
      genre: "Trend · POP",
      description:
        "강렬한 비트에 끌리는 당신! 음악을 통해 에너지를 얻고 신나는 리듬에 몸을 맡기는 유형이에요.",
      keywords: ["강렬한 비트", "에너지", "팝송"]
    },

    band: {
      name: "사운드 탐험가",
      genre: "ROCK · METAL",
      description:
        "기타와 드럼의 생생한 사운드를 좋아하는 당신! 개성 있는 음악을 발견하는 즐거움을 아는 유형이에요.",
      keywords: ["밴드", "인디", "새로운 발견"]
    },

    mellow: {
      name: "감성 수집가",
      genre: "BALLAD · ACOUSTIC",
      description:
        "따뜻한 멜로디와 마음에 남는 가사를 좋아하는 당신! 음악 속에서 공감과 위로를 발견하는 유형이에요.",
      keywords: ["가사", "감성", "어쿠스틱"]
    }
  };

  // 3. 음악 취향 테스트 6문항

  const questions = [
    {
      question: "처음 듣는 노래에서 가장 먼저 귀에 들어오는 건?",
      options: [
        { text: "쫀득한 베이스와 부드러운 보컬", type: "groove" },
        { text: "몸을 움직이게 만드는 강한 비트", type: "beat" },
        { text: "시원하게 울리는 기타와 드럼", type: "band" },
        { text: "마음에 남는 가사와 멜로디", type: "mellow" }
      ]
    },
    {
      question: "이어폰을 끼고 가장 걷고 싶은 장소는?",
      options: [
        { text: "바람이 불어오는 한적한 골목", type: "band" },
        { text: "비가 내리는 창밖을 보는 버스 안", type: "mellow" },
        { text: "불빛이 반짝이는 늦은 밤거리", type: "groove" },
        { text: "신나는 음악이 흐르는 페스티벌", type: "beat" }
      ]
    },
    {
      question: "친구의 음악 추천 중 가장 끌리는 말은?",
      options: [
        { text: "이 노래 틀면 분위기가 확 살아나!", type: "beat" },
        { text: "이 곡은 리듬이 진짜 매력적이야", type: "groove" },
        { text: "가사가 마치 내 이야기 같아", type: "mellow" },
        { text: "기타가 들어오는 순간 너무 좋아", type: "band" }
      ]
    },
    {
      question: "마음에 드는 노래를 반복 재생하는 이유는?",
      options: [
        { text: "특정 가사가 계속 마음에 남아서", type: "mellow" },
        { text: "악기 소리와 곡의 구성이 좋아서", type: "band" },
        { text: "박자와 후렴이 중독적이어서", type: "beat" },
        { text: "보컬의 톤과 그루브가 좋아서", type: "groove" }
      ]
    },
    {
      question: "지금 딱 한 장르만 골라 듣는다면?",
      options: [
        { text: "R&B / 소울", type: "groove" },
        { text: "팝송 / 트랜디 팝", type: "beat" },
        { text: "인디 / 록 / 밴드", type: "band" },
        { text: "발라드 / 어쿠스틱", type: "mellow" }
      ]
    },
    {
      question: "가장 추천받고 싶은 플레이리스트는?",
      options: [
        { text: "숨은 밴드 명곡 모음", type: "band" },
        { text: "에너지가 차오르는 비트 모음", type: "beat" },
        { text: "가사 좋은 조용한 음악 모음", type: "mellow" },
        { text: "분위기 좋은 그루브 음악 모음", type: "groove" }
      ]
    }
  ];

  // 4. 공통 보조 함수

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function safeURL(value) {
    try {
      const url = new URL(value);
      return url.protocol === "https:" ? url.href : "";
    } catch {
      return "";
    }
  }

  function safeEmbed(value) {
    try {
      const url = new URL(value);

      const hosts = [
        "www.youtube.com",
        "www.youtube-nocookie.com"
      ];

      if (
        url.protocol === "https:" &&
        hosts.includes(url.hostname) &&
        url.pathname.startsWith("/embed/")
      ) {
        return url.href;
      }

      return "";
    } catch {
      return "";
    }
  }

  // 5. 테스트 결과 계산

  function calculateResult(answers) {
    if (
      answers.length !== questions.length ||
      answers.some(answer => !playlists[answer])
    ) {
      return null;
    }

    const scores = {
      groove: 0,
      beat: 0,
      band: 0,
      mellow: 0
    };

    answers.forEach((type, index) => {
      scores[type] += index === 4 ? 2 : 1;
    });

    const max = Math.max(...Object.values(scores));

    const candidates = Object.keys(scores).filter(
      type => scores[type] === max
    );

    // 동점일 경우 장르 직접 선택 문항 우선
    if (candidates.includes(answers[4])) return answers[4];
    if (candidates.includes(answers[0])) return answers[0];

    return candidates[0];
  }

  // 6. 플레이리스트 카드 생성

  function renderCards(container, excludedType = null) {
    container.innerHTML = Object.entries(playlists)
      .filter(([id]) => id !== excludedType)
      .map(([id, playlist]) => `
        <a class="playlist-card"
           href="playlist.html?id=${id}">

          <div class="playlist-cover cover-${id}">
            <span>${playlist.symbol}</span>
          </div>

          <div class="playlist-card-body">
            <small>${escapeHTML(playlist.member)}</small>
            <h3>${escapeHTML(playlist.title)}</h3>
            <p>${escapeHTML(playlist.genre)}</p>
            <span class="card-link">
              플레이리스트 감상하기 →
            </span>
          </div>
        </a>
      `).join("");
  }

  // 7. 수록곡 목록 생성

  function renderTracks(playlist) {
    return `
      <div class="track-section">
        <div class="track-heading">
          <h3>TRACKLIST</h3>
          <span>${playlist.tracks.length}곡</span>
        </div>

        <ol class="track-list">
          ${playlist.tracks.map((track, i) => {
            const url = safeURL(track.url);

            return `
              <li class="track-row">
                <span class="track-number">
                  ${String(i + 1).padStart(2, "0")}
                </span>

                <span class="track-art">♫</span>

                <div class="track-info">
                  <strong>${escapeHTML(track.title)}</strong>
                  <small>${escapeHTML(track.artist)}</small>
                </div>

                ${url
                  ? `<a class="listen-link"
                       href="${escapeHTML(url)}"
                       target="_blank"
                       rel="noopener noreferrer">▶ 듣기</a>`
                  : `<span class="not-ready">등록 예정</span>`
                }
              </li>
            `;
          }).join("")}
        </ol>
      </div>
    `;
  }

  // 8. 플레이리스트 재생 및 설명

  function renderPlaylist(container, id) {
    const playlist = playlists[id];
    if (!playlist) return;

const embed = safeEmbed(playlist.embedUrl);

    container.innerHTML = `
      <div class="playlist-feature">
        <div class="playlist-feature-top">
          <div class="large-cover cover-${id}">
            ${playlist.symbol}
          </div>

          <div class="feature-info">
            <span class="eyebrow">
              ${escapeHTML(playlist.member)} ·
              ${escapeHTML(playlist.genre)}
            </span>

            <h2>${escapeHTML(playlist.title)}</h2>
            <p>${escapeHTML(playlist.description)}</p>

            <div class="tag-row">
              ${playlist.tags.map(tag =>
                `<span>#${escapeHTML(tag)}</span>`
              ).join("")}
            </div>
          </div>
        </div>

        ${embed
          ? `<iframe
               class="music-player"
               src="${escapeHTML(embed)}"
               title="플레이리스트 재생"
               allow="encrypted-media; picture-in-picture"
               allowfullscreen>
             </iframe>`
          : `<div class="player-placeholder">
               <div>♫</div>
               <strong>플레이리스트 전체 감상</strong>
               <p>재생목록을 등록하면 이곳에서 음악을 들을 수 있어요.</p>
             </div>`
        }

        ${renderTracks(playlist)}
      </div>
    `;
  }

  return {
    playlists,
    types,
    questions,
    calculateResult,
    renderCards,
    renderPlaylist,
    escapeHTML
  };

})();
