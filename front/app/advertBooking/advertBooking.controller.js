export default class AdvertBookingCtrl {
  constructor(AdvertBookingService, AdvertModalService, $sessionStorage) {
    this.AdvertBookingService = AdvertBookingService;
    this.AdvertModalService = AdvertModalService;
    this.advertBookingFilter = "addressFilter:addressDeparture";
    this.$sessionStorage = $sessionStorage;

    let tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    let afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    this.events = [
      {
        date: tomorrow,
        status: "full"
      },
      {
        date: afterTomorrow,
        status: "partially"
      }
    ];

    this.inlineOptions = {
      customClass: getDayClass,
      minDate: this.today(),
      showWeeks: true
    };

    this.dateOptions = {
      dateDisabled: disabled,
      formatYear: "yy",
      maxDate: new Date(2020, 5, 22),
      minDate: new Date(),
      startingDay: 1
    };
    this.today();
    this.toggleMin();
    this.list = [];
  }

  $onInit() {
    this.AdvertBookingService.findAll().then(res => {
      res.data.forEach(function(element) {
        this.idUser = JSON.parse(
          this.$sessionStorage.get("userConnected")
        ).registrationNumber;
        let count = 0;
        element.passengers.forEach(passenger => {
          if (this.idUser === passenger.passenger.registrationNumber) {
            return count;
          } else {
            count++;
          }
        }, this);
        if (element.statut === "INPROGRESS") {
          if (element.passengers.length == 0) {
            this.list.push(element);
          } else if (element.passengers[count].status !== "BOOKED") {
            this.list.push(element);
          }
        }
      }, this);
    });
    this.popup = false;
  }

  checkCapacity(capacity) {
    if (capacity <= 0) return true;
    else return false;
  }

  open(advert) {
    this.advert = advert;
    this.AdvertModalService.open(this.advert);
  }

  today() {
    this.dateFirst = new Date();
  }

  clear() {
    this.dateFirst = null;
  }

  openDate() {
    this.popup = true;
  }

  setDate(year, month, day) {
    this.dt = new Date(year, month, day);
  }

  toggleMin() {
    this.inlineOptions.minDate = this.inlineOptions.minDate ? null : new Date();
    this.dateOptions.minDate = this.inlineOptions.minDate;
  }
}

function disabled(data) {
  let date = data.date,
    mode = data.mode;
  return mode === "day" && (date.getDay() === 0 || date.getDay() === 6);
}

function getDayClass(data) {
  let date = data.date,
    mode = data.mode;
  if (mode === "day") {
    let dayToCheck = new Date(date).setHours(0, 0, 0, 0);

    for (let i = 0; i < this.events.length; i++) {
      let currentDay = new Date(this.events[i].date).setHours(0, 0, 0, 0);

      if (dayToCheck === currentDay) {
        return this.events[i].status;
      }
    }
  }
  return "";
}
