import kaboom from "kaboom"

const k = kaboom()

k.loadSprite("bean", "sprites/bean.png")

k.add([
	k.pos(100, 100),
	k.sprite("bean"),
])

k.onClick(() => k.addKaboom(k.mousePos()))
