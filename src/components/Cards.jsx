import React from 'react';

export default () => (
	<div className="topics">
		<div className="card">
			<div className="card-keynoteInfo">
				<figure className="card-speakerThumb">
					<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
				</figure>
				<div className="card-keynoteTitle">
					<p className="card-title">Wordpress</p>
					<p className="card-speaker">@SOUL CODE</p>
				</div>
			</div>

			<div className="card-keynotePreview">
				Wordpress é um sistema de gerenciamento de conteudos (CMS) para WEB, escrito em PHP com banco de dados MySQL. Atualmente está presente em 25% de todos os sites na internet. Ao término desde curso, o participante será capaz de desenvolver sites e blogs com conteúdos totalmente dinâmicos, trabalhar e prosseguir com os estudos dessa maravilhosa tecnologia.
				<br />
				<time dateTime="2016-1-1">08:00 AM - 12:00 PM / 6 Nov 2017</time>
			</div>
		</div>
		<div className="card">
			<div className="card-keynoteInfo">
				<figure className="card-speakerThumb">
					<img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
				</figure>
				<div className="card-keynoteTitle">
					<p className="card-title">Desenvolvimento de aplicações web e PWAs</p>
					<p className="card-speaker">@Leonardo Maia</p>
				</div>
			</div>

			<div className="card-keynotePreview">
				Neste minicurso estudaremos alguns conceitos fundamentais e técnicas para desenvolvermos aplicações web em geral, e também estudaremos no que consistem as Progressive Web Apps. Falaremos de tecnologias como HTML5, CSS3, ECMAScript6, Frameworks Javascript, Service Workers, IndexedDB, etc.. E estudaremos juntos o desenvolvimento de uma Progressive Web App.
				<time dateTime="2016-1-1">08:00 AM - 12:00 PM - 6 Nov 2017</time>
			</div>
		</div>
		<div className="card"></div>
		<div className="card"></div>
		<div className="card"></div>
		<div className="card"></div>
		<div className="card"></div>
 </div>
)