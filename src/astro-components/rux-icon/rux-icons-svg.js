// import './rux-icon-library.js';
// import './rux-icon.js';
const $_documentContainer = document.createElement("div");
$_documentContainer.setAttribute("style", "display: none;");

$_documentContainer.innerHTML = `
<rux-icon-library name="modem-controls" size="114">
	<svg>
		<defs>
			<g id="power-off" transform="translate(10)" fill="#329FFF" fill-rule="evenodd">
				<path d="M31.09 23.318v8.359C17.366 37.678 7.774 51.384 7.774 67.33c0 21.479 17.4 38.89 38.863 38.89 21.464 0 38.864-17.411 38.864-38.89 0-15.947-9.592-29.653-23.318-35.654v-8.359c18.113 6.407 31.09 23.693 31.09 44.013 0 25.775-20.88 46.669-46.636 46.669C20.88 114 0 93.106 0 67.331c0-20.32 12.977-37.606 31.09-44.013z"/>
				<rect x="41.455" width="10.364" height="54.409" rx="5.182"/>
			</g>
			<g id="hardware-details" fill="#329FFF" fill-rule="evenodd">
				<path d="M0 38.991A3.993 3.993 0 0 1 3.99 35h106.02a4 4 0 0 1 3.99 3.991v36.55a3.993 3.993 0 0 1-3.99 3.99H3.99A4 4 0 0 1 0 75.541V38.99zm5.344 4.356v27.837a3.008 3.008 0 0 0 3.008 3.003h97.296a3.004 3.004 0 0 0 3.008-3.003V43.347a3.008 3.008 0 0 0-3.008-3.003H8.352a3.004 3.004 0 0 0-3.008 3.003z" opacity=".405"/>
				<path d="M12.469 47.469h24.938v7.125H12.469zM12.469 59.938h24.938v7.125H12.469zM42.75 47.469h26.719v7.125H42.75zM42.75 59.938h26.719v7.125H42.75zM74.813 47.469h26.719v7.125H74.813zM74.813 59.938h26.719v7.125H74.813z"/>
			</g>
			<g id="release-modem" fill="#329FFF" fill-rule="evenodd">
        <path d="M0 37.804a3.993 3.993 0 0 1 3.99-3.992h106.02a4 4 0 0 1 3.99 3.992v36.549a3.993 3.993 0 0 1-3.99 3.99H3.99A4 4 0 0 1 0 74.354v-36.55zm5.344 4.356v27.837A3.008 3.008 0 0 0 8.352 73h97.296a3.004 3.004 0 0 0 3.008-3.003V42.16a3.008 3.008 0 0 0-3.008-3.004H8.352a3.004 3.004 0 0 0-3.008 3.004z" opacity=".405"/>
        <path d="M12.469 46.281h24.938v7.125H12.469zM12.469 58.75h24.938v7.125H12.469zM42.75 46.281h24.938v7.125H42.75zM42.75 58.75h24.938v7.125H42.75zM73.031 16h28.5v7.125h-28.5z"/>
    	</g>
			<g id="set-power" transform="translate(0 15)" fill="#329FFF" fill-rule="evenodd">
        <path d="M21.509 43.019h10.755v6.453H21.509zM36.566 32.264h10.755v17.208H36.566zM51.623 21.509h10.755v27.962H51.623zM66.679 10.755h10.755v38.717H66.679zM81.736 0h10.755v49.472H81.736zM0 66.679h34.415v4.302H0zM60.226 66.679H114v4.302H60.226z"/>
        <path d="M47.32 83.887c-8.315 0-15.056-6.741-15.056-15.057 0-8.315 6.741-15.056 15.057-15.056 8.315 0 15.056 6.74 15.056 15.056 0 8.316-6.74 15.057-15.056 15.057zm0-4.302c5.94 0 10.755-4.815 10.755-10.755S53.26 58.075 47.321 58.075c-5.94 0-10.755 4.816-10.755 10.755 0 5.94 4.815 10.755 10.755 10.755z"/>
        <circle cx="47.321" cy="68.83" r="4.302"/>
    	</g>
		</defs>
	</svg>
</rux>
<rux-icon-library name="media-controls" size="114">
	<svg>
		<defs>
			<path id="play" d="M104.827 58.25l-85.96 58.141a1.54 1.54 0 0 1-2.404-1.276V-1.169a1.54 1.54 0 0 1 2.403-1.276l85.96 58.142a1.54 1.54 0 0 1 0 2.552z" fill="#FFF" fill-rule="evenodd"/>
			<path id="pause" d="M17 0h30.571a1 1 0 0 1 1 1v112a1 1 0 0 1-1 1H17a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1zm48.857 0H96.43a1 1 0 0 1 1 1v112a1 1 0 0 1-1 1H65.857a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1z" fill="#FFF" fill-rule="evenodd"/>
		</defs>
	</svg>
</rux>
<rux-icon-library name="test" size="40">
	<svg>
		<defs>
			<g id="mission">
				<path d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20zm0-3.158c9.302 0 16.842-7.54 16.842-16.842S29.302 3.158 20 3.158 3.158 10.698 3.158 20 10.698 36.842 20 36.842zm0-4.21c-6.976 0-12.632-5.656-12.632-12.632S13.024 7.368 20 7.368 32.632 13.024 32.632 20 26.976 32.632 20 32.632zm0-3.158a9.474 9.474 0 1 0 0-18.948 9.474 9.474 0 0 0 0 18.948zm0-4.21a5.263 5.263 0 1 1 0-10.527 5.263 5.263 0 0 1 0 10.526z" />
			</g>
		</defs>
	</svg>
</rux-icon-library>
<rux-icon-library name="default" size="114">
	<svg>
		<defs>
				<g id="fpo">
					<path d="M96.153 26.162A13.074 13.074 0 0 1 84.07 18.09a13.085 13.085 0 0 1 2.831-14.257 13.07 13.07 0 0 1 14.25-2.837 13.08 13.08 0 0 1 8.071 12.085c0 7.223-5.85 13.079-13.07 13.08zM82.38 33.578a29.15 29.15 0 0 1 .693 6.588v52.708c0 14.084-7.205 21.126-21.613 21.126H29.652c-6.442 0-11.327-1.965-14.655-5.895-3.329-3.93-4.994-9.28-4.997-16.049V40.158a33.38 33.38 0 0 1 .342-4.888l1.732-6.165c2.89-6.83 9.184-9.928 19.205-9.928h31.807c4.502 0 8.35 1.112 11.548 3.151L49.929 38.171H38.2a6.983 6.983 0 0 0-4.995 2.046 6.994 6.994 0 0 0-2.047 4.998v43.114a6.994 6.994 0 0 0 2.047 4.997 6.983 6.983 0 0 0 4.995 2.046h16.665a6.987 6.987 0 0 0 5.157-2.047 6.607 6.607 0 0 0 2.05-4.835V53.032L82.38 33.578z"/>
				</g>
				<g id="notifications">
					<path d="M20.667 60.167v-19c0-15.527 12.291-28.444 28.511-31.147a11.58 11.58 0 0 1-.011-.52c0-5.247 3.544-9.5 7.916-9.5C61.456 0 65 4.253 65 9.5c0 .398-.02.791-.06 1.177 14.651 3.74 25.393 15.975 25.393 30.49v19c0 12.242 5.671 22.166 12.667 22.166v15.834H8V82.333c6.996 0 12.667-9.924 12.667-22.166zM70.835 104.5c-1.758 5.463-7.957 9.5-15.335 9.5-7.378 0-13.577-4.037-15.335-9.5h30.67z"></path>
				</g>
				<g id="settings">
						<path d="M42.384 114a58.481 58.481 0 0 1-16.12-6.821 14.654 14.654 0 0 0 1.303-6.06c0-8.123-6.584-14.707-14.705-14.707-2.16 0-4.212.466-6.06 1.303A58.49 58.49 0 0 1 0 71.669c7.63-.54 13.653-6.9 13.653-14.669 0-7.768-6.023-14.13-13.653-14.67a58.49 58.49 0 0 1 6.802-16.045c1.848.837 3.9 1.303 6.06 1.303 8.121 0 14.705-6.584 14.705-14.706 0-2.16-.466-4.213-1.303-6.06A58.481 58.481 0 0 1 42.384 0c.898 7.261 7.09 12.882 14.593 12.882C64.481 12.882 70.672 7.26 71.57 0a58.481 58.481 0 0 1 16.12 6.821 14.654 14.654 0 0 0-1.303 6.06c0 8.123 6.584 14.707 14.705 14.707 2.16 0 4.213-.466 6.06-1.303A58.488 58.488 0 0 1 114 42.511c-6.914 1.2-12.172 7.23-12.172 14.489 0 7.258 5.258 13.288 12.172 14.489a58.488 58.488 0 0 1-6.848 16.226 14.651 14.651 0 0 0-6.06-1.303c-8.121 0-14.705 6.584-14.705 14.706 0 2.16.466 4.213 1.303 6.06A58.481 58.481 0 0 1 71.57 114c-.898-7.261-7.09-12.882-14.593-12.882-7.504 0-13.695 5.621-14.593 12.882zm14.593-27.588c16.243 0 29.41-13.168 29.41-29.412S73.22 27.588 56.977 27.588c-16.243 0-29.41 13.168-29.41 29.412s13.167 29.412 29.41 29.412z"></path>
				</g>
				<g id="caution">
					<path d="M57.03 4c7.535 0 61.347 95.516 56.688 101.698-4.66 6.182-107.595 4.878-113.302 0C-5.291 100.82 49.494 4 57.03 4zm3.072 67.595l1.622-31.077H50.718l1.623 31.077h7.761zm-9.51 10.879c0 1.717.487 3.048 1.462 3.992.976.943 2.354 1.415 4.136 1.415 1.738 0 3.096-.482 4.071-1.447.976-.965 1.463-2.285 1.463-3.96 0-1.74-.482-3.075-1.447-4.008-.965-.933-2.327-1.4-4.087-1.4-1.824 0-3.213.456-4.167 1.368-.955.912-1.432 2.258-1.432 4.04z"></path>
				</g>
		</defs>
	</svg>
</rux-icon-library>
<rux-icon-library name="advanced-status" size="114">
  <svg>
		<defs>
			<g id="antenna">
				<path d="M46.941 114.218H0L19.39 92.53l5.812 5.315 12.826-1.209 8.913 17.583zm-2.287-51.037l19.052-10.887-10.887 19.052 18.308 18.307L27.3 93.244l-7.182-7.182 3.59-43.827 20.946 20.946z" />
			</g>

			<g id="antenna-transmit">
				<path d="M46.941 114.218H0L19.39 92.53l5.812 5.315 12.826-1.209 8.913 17.583zm-2.287-51.037l19.052-10.887-10.887 19.052 18.308 18.307L27.3 93.244l-7.182-7.182 3.59-43.827 20.946 20.946zm68.956 2.525h-6.419c.068-1.109.103-2.227.103-3.353 0-29.629-24.018-53.647-53.647-53.647a54.47 54.47 0 0 0-3.353.103V2.39C52.494 2.133 54.731 2 57 2c31.48 0 57 25.52 57 57 0 2.269-.133 4.506-.39 6.706zM50.294 15.412c27.777 0 50.294 22.517 50.294 50.294h-7.301c-.314-23.604-19.39-42.679-42.993-42.993v-7.301zm0 13.412c19.426 1.8 34.847 17.412 36.353 36.922h-6.459c-2.232-15.568-14.413-27.925-29.894-30.422v-6.5z" />
			</g>

			<g id="antenna-receive">
				<path d="M46.941 114.218H0L19.39 92.53l5.812 5.315 12.826-1.209 8.913 17.583zm-2.287-51.037l19.052-10.887-10.887 19.052 18.308 18.307L27.3 93.244l-7.182-7.182 3.59-43.827 20.946 20.946zm28.462-13.833a3.677 3.677 0 1 1 0-7.354 3.677 3.677 0 0 1 0 7.354zM85.26 39.244a5.516 5.516 0 1 1 0-11.032 5.516 5.516 0 0 1 0 11.032zM99.645 27.71a7.355 7.355 0 1 1 0-14.71 7.355 7.355 0 0 1 0 14.71z" />
			</g>

			<g id="satellite">
			<path d="M29.434 44.478l16.01-15.932 14.57 24.215-7.506 7.885-23.074-16.168zM12.597 90.617L0 78.361l19.217-19.49 14.786-4.31 2.802 3.115-5.768 15.889-18.44 17.052zM77.587 1l12.597 12.256-19.217 19.49-14.786 4.31-2.802-3.115 5.768-15.889L77.587 1z" />
			</g>

			<g id="satellite-transmit">
				<path d="M54.34 113.329v-9.189c1.038.069 2.085.104 3.14.104 26.013 0 47.1-21.16 47.1-47.26 0-1.059-.035-2.11-.103-3.151h9.157c.242 2.067.366 4.17.366 6.301 0 29.581-23.899 53.562-53.38 53.562-2.124 0-4.22-.125-6.28-.367zm40.71-59.496c-1.537 21.85-18.934 39.306-40.71 40.848v-8.094c16.84-2.5 30.152-15.858 32.643-32.754h8.067zm-16.89 0c-3.253 11.542-12.317 20.636-23.82 23.9V70.69a30.63 30.63 0 0 0 16.8-16.857h7.02zm-48.726-9.355l16.01-15.932 14.57 24.215-7.506 7.885-23.074-16.168zM12.597 90.617L0 78.361l19.217-19.49 14.786-4.31 2.802 3.115-5.768 15.889-18.44 17.052zM77.587 1l12.597 12.256-19.217 19.49-14.786 4.31-2.802-3.115 5.768-15.889L77.587 1z" />
			</g>

			<g id="satellite-receive">
				<path d="M74.459 70.293c-2.085 0-3.775-1.646-3.775-3.677s1.69-3.678 3.775-3.678c2.084 0 3.774 1.647 3.774 3.678 0 2.03-1.69 3.677-3.774 3.677zm15.668 14.254c-3.127 0-5.661-2.47-5.661-5.517 0-3.046 2.534-5.516 5.661-5.516s5.661 2.47 5.661 5.516c0 3.047-2.534 5.517-5.66 5.517zm17.1 16.554c-4.17 0-7.55-3.293-7.55-7.355s3.38-7.355 7.55-7.355c4.168 0 7.548 3.293 7.548 7.355s-3.38 7.355-7.549 7.355zM29.433 44.478l16.01-15.932 14.57 24.215-7.506 7.885-23.074-16.168zM12.597 90.617L0 78.361l19.217-19.49 14.786-4.31 2.802 3.115-5.768 15.889-18.44 17.052zM77.587 1l12.597 12.256-19.217 19.49-14.786 4.31-2.802-3.115 5.768-15.889L77.587 1z" />
			</g>

			<g id="mission">
					<path d="M57,114 C25.5197692,114 0,88.4802306 0,57 C0,25.5197692 25.5197692,0 57,0 C88.4802306,0 114,25.5197692 114,57 C114,88.4802306 88.4802306,114 57,114 Z M57,105 C83.509668,105 105,83.509668 105,57 C105,30.490332 83.509668,9 57,9 C30.490332,9 9,30.490332 9,57 C9,83.509668 30.490332,105 57,105 Z" id="outer"></path>
					<path d="M57,93 C37.117749,93 21,76.882251 21,57 C21,37.117749 37.117749,21 57,21 C76.882251,21 93,37.117749 93,57 C93,76.882251 76.882251,93 57,93 Z M57,84 C71.9116881,84 84,71.9116881 84,57 C84,42.0883119 71.9116881,30 57,30 C42.0883119,30 30,42.0883119 30,57 C30,71.9116881 42.0883119,84 57,84 Z" id="middle"></path>
					<path d="M57,72 C48.7157289,72 42,65.2842711 42,57 C42,48.7157289 48.7157289,42 57,42 C65.2842711,42 72,48.7157289 72,57 C72,65.2842711 65.2842711,72 57,72 Z" id="center"></path>
			</g>

			<g id="equipment">
				<path d="M0 12.332A6.322 6.322 0 0 1 6.333 6H107.67a6.317 6.317 0 0 1 6.333 6.332v19.003a6.322 6.322 0 0 1-6.333 6.333H6.333A6.317 6.317 0 0 1 0 31.335V12.332zm6.334 3.14v12.725a3.156 3.156 0 0 0 3.143 3.137h95.05c1.71 0 3.143-1.405 3.143-3.137V15.47a3.156 3.156 0 0 0-3.144-3.137H9.477c-1.71 0-3.143 1.404-3.143 3.137zm9.5 3.195h6.333v6.334h-6.333v-6.334zm12.667 0h6.333v6.334h-6.333v-6.334zm12.667 0H47.5v6.334h-6.333v-6.334zM0 50.333a6.322 6.322 0 0 1 6.333-6.332H107.67a6.317 6.317 0 0 1 6.333 6.332v19.004a6.322 6.322 0 0 1-6.333 6.332H6.333A6.317 6.317 0 0 1 0 69.337V50.333zm6.334 3.14v12.725a3.156 3.156 0 0 0 3.143 3.137h95.05c1.71 0 3.143-1.404 3.143-3.137V53.472a3.156 3.156 0 0 0-3.144-3.137H9.477c-1.71 0-3.143 1.404-3.143 3.137zm9.5 3.195h6.333v6.334h-6.333v-6.334zm12.667 0h6.333v6.334h-6.333v-6.334zm12.667 0H47.5v6.334h-6.333v-6.334zM0 88.335a6.322 6.322 0 0 1 6.333-6.333H107.67a6.317 6.317 0 0 1 6.333 6.333v19.003a6.322 6.322 0 0 1-6.333 6.332H6.333A6.317 6.317 0 0 1 0 107.338V88.335zm6.334 3.138V104.2a3.156 3.156 0 0 0 3.143 3.137h95.05c1.71 0 3.143-1.404 3.143-3.137V91.473a3.156 3.156 0 0 0-3.144-3.137H9.477c-1.71 0-3.143 1.405-3.143 3.137zm9.5 3.196h6.333v6.334h-6.333v-6.334zm12.667 0h6.333v6.334h-6.333v-6.334zm12.667 0H47.5v6.334h-6.333v-6.334z" />
			</g>

			<g id="processor">
				<path d="M14.25 19.926c0-3.135 2.559-5.676 5.676-5.676h74.148c3.135 0 5.676 2.559 5.676 5.676v74.148c0 3.135-2.559 5.676-5.676 5.676H19.926c-3.135 0-5.676-2.559-5.676-5.676V19.926zM28.5 0h5.7v8.55h-5.7V0zm17.1 0h5.7v8.55h-5.7V0zm17.1 0h5.7v8.55h-5.7V0zm17.1 0h5.7v8.55h-5.7V0zM28.5 105.45h5.7V114h-5.7v-8.55zM0 28.5h8.55v5.7H0v-5.7zm0 17.1h8.55v5.7H0v-5.7zm0 17.1h8.55v5.7H0v-5.7zm0 17.1h8.55v5.7H0v-5.7zm105.45-51.3H114v5.7h-8.55v-5.7zm0 17.1H114v5.7h-8.55v-5.7zm0 17.1H114v5.7h-8.55v-5.7zm0 17.1H114v5.7h-8.55v-5.7zM45.6 105.45h5.7V114h-5.7v-8.55zm17.1 0h5.7V114h-5.7v-8.55zm17.1 0h5.7V114h-5.7v-8.55zm-54.15-74.1a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4zm62.7 62.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4z" />
			</g>

    </defs>
	</svg>
</rux-icon-library>
<rux-icon-library name="advanced-status-egs" size="114">
  <svg>
		<defs>
			<g id="antenna">
				<path d="M42.553 33.734c0-7.866 6.242-14.088 14.043-14.088 7.562 0 14.044 6.222 14.044 14.088 0 5.775-3.601 10.56-8.426 12.68V114H50.979V46.413c-5.065-1.879-8.426-6.904-8.426-12.679zM26.907.001l5.102 5.102a37.315 37.315 0 0 0-1.799 1.684c-14.425 14.425-14.37 37.867.123 52.36.588.588 1.19 1.152 1.806 1.692l-5.078 5.079a42.696 42.696 0 0 1-3.701-3.297C6.935 46.196 6.872 19.628 23.22 3.28A42.105 42.105 0 0 1 26.908 0zm10.49 57.118c-11.28-12.985-11.325-32.325-.105-45.257l4.494 4.495c-7.95 10.726-7.915 25.525.085 36.288l-4.473 4.474zm49.24 8.798l-5.102-5.102a37.315 37.315 0 0 0 1.799-1.684c14.425-14.425 14.37-37.868-.123-52.36a37.842 37.842 0 0 0-1.807-1.693L86.483 0a42.696 42.696 0 0 1 3.701 3.296c16.425 16.425 16.488 42.993.14 59.342a42.105 42.105 0 0 1-3.687 3.279zM76.28 11.862c11.28 12.985 11.325 32.325.106 45.257l-4.494-4.495c7.95-10.726 7.915-25.525-.085-36.288l4.473-4.474z" />
			</g>

			<g id="payload">
				<path d="M15.614 31.248l40.558 21.458 41.16-21.775L57.158 8.694 15.614 31.248zM11.7 37.8v43.295l40.11 21.394V59.022L11.7 37.8zm89.968-.541L60.534 59.022v44.485l41.134-22.37V37.259zM57.196 0l52.172 28.88v56.747L57.196 114 4 85.627V28.88L57.196 0zm-1.024 23.813c-1.694 0-3.068-1.361-3.068-3.04s1.374-3.04 3.068-3.04c1.695 0 3.07 1.361 3.07 3.04s-1.375 3.04-3.07 3.04zm0 9.627c-1.694 0-3.068-1.361-3.068-3.04s1.374-3.04 3.068-3.04c1.695 0 3.07 1.361 3.07 3.04s-1.375 3.04-3.07 3.04zm0 10.133c-1.694 0-3.068-1.361-3.068-3.04s1.374-3.04 3.068-3.04c1.695 0 3.07 1.361 3.07 3.04s-1.375 3.04-3.07 3.04zM69.982 68.4c-1.694 0-3.068-1.361-3.068-3.04s1.374-3.04 3.069-3.04c1.695 0 3.069 1.361 3.069 3.04s-1.374 3.04-3.07 3.04zm10.23 5.067c-1.694 0-3.068-1.361-3.068-3.04s1.374-3.04 3.069-3.04c1.694 0 3.068 1.361 3.068 3.04s-1.374 3.04-3.068 3.04zm10.23 5.066c-1.694 0-3.068-1.361-3.068-3.04s1.374-3.04 3.068-3.04c1.695 0 3.07 1.361 3.07 3.04s-1.375 3.04-3.07 3.04zm-68.028 0c-1.695 0-3.069-1.361-3.069-3.04s1.374-3.04 3.07-3.04c1.694 0 3.068 1.361 3.068 3.04s-1.374 3.04-3.069 3.04zM42.874 68.4c-1.695 0-3.07-1.361-3.07-3.04s1.375-3.04 3.07-3.04c1.695 0 3.069 1.361 3.069 3.04s-1.374 3.04-3.07 3.04zm-10.23 5.067c-1.695 0-3.069-1.361-3.069-3.04s1.374-3.04 3.069-3.04c1.695 0 3.069 1.361 3.069 3.04s-1.374 3.04-3.07 3.04z" />
			</g>

			<g id="altitude">
				<path d="M32.654 15.775l5.098 7.77a2.687 2.687 0 0 1-.803 3.74 2.748 2.748 0 0 1-3.779-.796l-5.118-7.801a49.199 49.199 0 0 0-14.655 16.506l8.625 3.98a2.692 2.692 0 0 1 1.32 3.593c-.637 1.353-2.262 1.939-3.629 1.308l-8.635-3.986a47.999 47.999 0 0 0-3.532 18.123c0 1.25.048 2.493.143 3.728l9.66-1.344c1.494-.208 2.875.822 3.085 2.3.21 1.48-.83 2.846-2.325 3.054L8.403 67.3a47.861 47.861 0 0 0 5.238 14.377l87.094-.686a47.843 47.843 0 0 0 4.849-13.623L95.395 65.95c-1.494-.208-2.534-1.575-2.325-3.053.21-1.479 1.591-2.509 3.085-2.3l10.151 1.411c.098-1.257.148-2.523.148-3.796 0-16.41-8.23-30.93-20.845-39.763l-5.275 8.04a2.748 2.748 0 0 1-3.778.795 2.687 2.687 0 0 1-.803-3.74l5.23-7.97a49.71 49.71 0 0 0-21.5-6.044v9.334c0 1.493-1.222 2.703-2.73 2.703-1.51 0-2.732-1.21-2.732-2.703V9.556a49.69 49.69 0 0 0-21.367 6.22zm73.552 70.828l-1.084 1.824-95.748.753-1.114-1.806A55.368 55.368 0 0 1 0 58.212C0 27.165 25.522 2 57 2s57 25.165 57 56.212a55.36 55.36 0 0 1-7.794 28.391zM61.533 51.056c19.977-7.593 30.845-11.339 32.604-11.238-.282 1.37-10.046 7.738-29.293 19.1-.588 4.024-4.097 7.115-8.34 7.115-4.653 0-8.426-3.72-8.426-8.31 0-4.589 3.773-8.309 8.426-8.309 1.885 0 3.626.61 5.03 1.642zM32.154 93.312H81.23a2.929 2.929 0 0 1 2.93 2.93v13.8a2.929 2.929 0 0 1-2.93 2.929H32.154a2.929 2.929 0 0 1-2.929-2.93v-13.8a2.929 2.929 0 0 1 2.93-2.929z"/>
			</g>

			<g id="propulsion-power">
				<path d="M28 0h58a5 5 0 0 1 5 5v104a5 5 0 0 1-5 5H28a5 5 0 0 1-5-5V5a5 5 0 0 1 5-5zm43.345 9.89L33.303 55.08l20.606 5.55-16.247 44 42.005-49.154-19.814-6.342L71.345 9.89z"></path>
			</g>

			<g id="netcom">
				<path d="M36.976 69.715a22.698 22.698 0 0 1-4.039-12.962c0-12.593 10.21-22.802 22.803-22.802 2.618 0 5.132.44 7.474 1.253l4.817-11.35a12.666 12.666 0 0 1-6.717-11.186C61.314 5.672 66.986 0 73.982 0 80.978 0 86.65 5.672 86.65 12.668c0 6.997-5.672 12.668-12.668 12.668-1.088 0-2.145-.137-3.153-.395l-4.852 11.431c7.453 3.75 12.566 11.469 12.566 20.381 0 .836-.045 1.662-.133 2.475l9.801 2.443c1.582-5.193 6.41-8.971 12.12-8.971 6.998 0 12.669 5.67 12.669 12.668 0 6.996-5.672 12.668-12.668 12.668-6.997 0-12.668-5.672-12.668-12.668 0-.247.007-.493.02-.736L77.89 62.19a22.831 22.831 0 0 1-9.293 13.398l5.404 12.732a12.654 12.654 0 0 1 4.035-.656c6.996 0 12.668 5.671 12.668 12.668 0 6.996-5.672 12.668-12.668 12.668-6.997 0-12.668-5.672-12.668-12.668a12.66 12.66 0 0 1 5.921-10.724l-5.298-12.48a22.707 22.707 0 0 1-10.251 2.428c-6.7 0-12.726-2.89-16.898-7.491L23.416 85.009a12.609 12.609 0 0 1 1.92 6.708c0 6.997-5.671 12.669-12.668 12.669C5.672 104.386 0 98.714 0 91.717 0 84.721 5.672 79.05 12.668 79.05c3.453 0 6.583 1.382 8.868 3.622l15.44-12.956z" />
			</g>

			<g id="thermal" transform="translate(27 8)">
				<path d="M10.915 61.222C4.448 64.387 0 70.986 0 78.613 0 89.32 8.765 98 19.576 98c10.812 0 19.577-8.68 19.577-19.387 0-7.627-4.448-14.226-10.915-17.39a8.664 8.664 0 0 0 .237-2.017V8.64A8.64 8.64 0 0 0 19.834 0h-.515a8.64 8.64 0 0 0-8.641 8.64v50.566c0 .694.082 1.37.237 2.016zm-7.237-3.757V8.64C3.678.003 10.68-7 19.318-7h.516c8.638 0 15.64 7.003 15.64 15.64v48.825c6.599 4.891 10.679 12.654 10.679 21.148C46.153 93.201 34.239 105 19.576 105 4.914 105-7 93.201-7 78.613c0-8.494 4.08-16.257 10.678-21.148z" id="container" />
				<path d="M15.763 65.874V21.108h7.627v44.766c5.584 1.626 9.66 6.731 9.66 12.777 0 7.356-6.032 13.318-13.474 13.318S6.102 86.007 6.102 78.651c0-6.046 4.076-11.151 9.66-12.777z" id="mercury" />
				<path d="M41.695 5.528H60v6.031H41.695v-6.03zm0 10.051h13.22v6.031h-13.22v-6.03zm0 10.052H60v6.03H41.695v-6.03zm0 10.051h13.22v6.03h-13.22v-6.03zm0 10.051H60v6.031H41.695v-6.03z" id="text" />
			</g>

    </defs>
	</svg>
</rux-icon-library>
<rux-icon-library name="status" size="12">
	<svg>
		<defs>
				<g id="emergency">
					<path fill="#F72501" d="M12 12H0L6 0z"></path>
				</g>
				<g id="caution">
					<path fill="#F8E81C" d="M1 1h10v10H1z"></path>
				</g>
				<g id="error">
					<circle fill="#C05846" cx="6" cy="6" r="6"></circle>
				</g>
				<g id="ok">
					<path fill="#7ED321" d="M1 3h10v5H1z"></path>
				</g>
				<g id="standby">
					<path fill="#A1DCFB" d="M6 12A6 6 0 1 1 6 0a6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
				</g>
				<g id="off">
					<path fill="#C6CCD1" d="M3 3h6v6H3z"></path>
				</g>

		</defs>
	</svg>
</rux-icon-library>`;

document.head.appendChild($_documentContainer);
