const profile = {
    name: 'jack',
    age: 25,
    coordinates: {
        lat: 1,
        lng: 2
    },
    setAge: function (age: number): void {
        this.age = age;
    }
};


const { age }: { age: number} = profile;


const {coordinates: {lat, lng}}: {coordinates: {lat: number, lng: number}} = profile
