all: front back

front:
	cd client && npm run dev

back:
	cd api && npm run start
