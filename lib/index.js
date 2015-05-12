export default class Counts {
	constructor(initial) {
		this.counts = initial || {}
	}

	inc(id, dt) {
		this.counts[id] += dt || 1
	}

	dec(id, dt) {
		this.counts[id] -= dt || 1
	}

	get(id) {
		return this.counts[id] || 0
	}

	has(id) {
		return !!this.get(id)
	}
}
