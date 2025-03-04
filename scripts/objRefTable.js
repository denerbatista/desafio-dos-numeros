const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Behaviors.Platform,
		C3.Behaviors.bound,
		C3.Behaviors.Bullet,
		C3.Plugins.Text,
		C3.Plugins.Particles,
		C3.Plugins.Keyboard,
		C3.Behaviors.solid,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Exps.random,
		C3.Behaviors.Platform.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.System.Acts.SubVar,
		C3.Plugins.System.Cnds.Every,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.System.Acts.CreateObject,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Acts.ResetEventVar,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Acts.SetCollisions,
		C3.Plugins.Text.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetDefaultColor
	];
};
self.C3_JsPropNameTable = [
	{Play: 0},
	{Toque: 0},
	{Fundo: 0},
	{Plataforma: 0},
	{RestritoAoLayout: 0},
	{Personagem: 0},
	{Direita: 0},
	{Esquerda: 0},
	{somaUm: 0},
	{Projétil: 0},
	{placar: 0},
	{valorSomado: 0},
	{particulaSoma: 0},
	{Teclado: 0},
	{valorObjetivo: 0},
	{textoObjetivo: 0},
	{Sólido: 0},
	{chão: 0},
	{bomba: 0},
	{explosão: 0},
	{coracao: 0},
	{gameOverPergunta: 0},
	{gameOverRespostaSim: 0},
	{Texto: 0},
	{gameOverRespostaNao: 0},
	{Fundo2: 0},
	{fechar: 0},
	{continuarPergunta: 0},
	{continuarRespostaSim: 0},
	{continuarRespostaNao: 0},
	{Esquerda2: 0},
	{Direita2: 0},
	{estrela: 0},
	{Sprite2: 0},
	{Texto2: 0},
	{fechar2: 0},
	{somaDois: 0},
	{somaCinco: 0},
	{coracaoVida2: 0},
	{coracaoVida1: 0},
	{coracaoVida3: 0},
	{somaSeis: 0},
	{somaSete: 0},
	{somaQuatro: 0},
	{somaTres: 0},
	{somaOito: 0},
	{somaNove: 0},
	{Sprite: 0},
	{Sprite3: 0},
	{soma: 0},
	{objetivoSoma: 0},
	{vivoMorto: 0},
	{geraNumero: 0},
	{vidas: 0},
	{somaSubtracao: 0},
	{randonNumeros: 0}
];

self.InstanceType = {
	Play: class extends self.ISpriteInstance {},
	Toque: class extends self.IInstance {},
	Fundo: class extends self.ISpriteInstance {},
	Personagem: class extends self.ISpriteInstance {},
	Direita: class extends self.ISpriteInstance {},
	Esquerda: class extends self.ISpriteInstance {},
	somaUm: class extends self.ISpriteInstance {},
	placar: class extends self.ISpriteInstance {},
	valorSomado: class extends self.ITextInstance {},
	particulaSoma: class extends self.IParticlesInstance {},
	Teclado: class extends self.IInstance {},
	valorObjetivo: class extends self.ITextInstance {},
	textoObjetivo: class extends self.ITextInstance {},
	chão: class extends self.ISpriteInstance {},
	bomba: class extends self.ISpriteInstance {},
	explosão: class extends self.ISpriteInstance {},
	coracao: class extends self.ISpriteInstance {},
	gameOverPergunta: class extends self.ITextInstance {},
	gameOverRespostaSim: class extends self.ITextInstance {},
	Texto: class extends self.ITextInstance {},
	gameOverRespostaNao: class extends self.ITextInstance {},
	Fundo2: class extends self.ISpriteInstance {},
	fechar: class extends self.ISpriteInstance {},
	continuarPergunta: class extends self.ITextInstance {},
	continuarRespostaSim: class extends self.ITextInstance {},
	continuarRespostaNao: class extends self.ITextInstance {},
	Esquerda2: class extends self.ISpriteInstance {},
	Direita2: class extends self.ISpriteInstance {},
	estrela: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	fechar2: class extends self.ISpriteInstance {},
	somaDois: class extends self.ISpriteInstance {},
	somaCinco: class extends self.ISpriteInstance {},
	coracaoVida2: class extends self.ISpriteInstance {},
	coracaoVida1: class extends self.ISpriteInstance {},
	coracaoVida3: class extends self.ISpriteInstance {},
	somaSeis: class extends self.ISpriteInstance {},
	somaSete: class extends self.ISpriteInstance {},
	somaQuatro: class extends self.ISpriteInstance {},
	somaTres: class extends self.ISpriteInstance {},
	somaOito: class extends self.ISpriteInstance {},
	somaNove: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {}
}