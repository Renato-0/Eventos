<template>
  <q-layout view="lHh Lpr lFf">
        <q-page-container class="pt-0-important bg">
            <q-page>
              <div><q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">Overline</div>
          <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
          <div class="text-caption text-grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </q-card-section>

        <q-card-section class="col-5 flex flex-center">
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <!-- <q-btn flat>
          7:30PM
        </q-btn> -->
        <q-btn flat color="primary">
          Reserve
        </q-btn>
      </q-card-actions>
    </q-card></div>
              <!-- <div><q-card class="my-card">
      <q-card-section class="bg-grey-8 text-white">
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn flat>Action 1</q-btn>
        <q-btn flat>Action 2</q-btn>
      </q-card-actions>
    </q-card></div> -->
                <div class="row" style="height: 100vh">
                    <div class="col-12 flex content-center justify-center">
                      <div class="row items-center" style="max-width: 800px; width: 100%; height: 421px;">
                        <div class="col-8 full-height">
                          <div class="row justify-center items-center">
                            <q-btn flat dense label="Anterior" @click="calendarPrev" />
                            <q-separator vertical />
                            <q-btn flat dense label="Proximo" @click="calendarNext" />
                          </div>
                          <q-separator />
                          <div style="overflow: hidden; height: 390px;">
                            <q-calendar 
                              ref="calendar"
                              v-model="selectedDate"
                              view="week"
                              locale="pt-br"
                              animated="true"
                              @input="onModelChanged"
                              @click:date2="onClickDate2"
                              @click:day:header2="onClickDayHeader2"
                              @click:interval2="onClickInterval2"
                              @click:time2="onClickTime2"
                              @click:interval:header2="onClickIntervalHeader2"
                            />
                          </div>
    </div>
    <q-card class="events col-4 q-pa-xs full-height column justify-start items-start">
      <q-item-section class="full-width">
        <q-item-label>Eventos</q-item-label>
        <q-item-label class="my-text-caption">Novos eventos aparecem no topo</q-item-label>
      </q-item-section>
      <q-separator />
      <div class="scroll overflow-auto" style="height: 360px; width: 100%;">
        <div v-for="(event, index) in events" :key="index" class="col-12" style="font-size: 10px; line-height: 10px; max-height: 14px; min-height: 14px; padding: 2px 2px; white-space: nowrap;">
          {{ event }}
        </div>
      </div>
    </q-card>
    <div><q-btn @click="onClickTime2">Novo Evento</q-btn></div>
  </div>
                        <router-view/>
                    </div>
                </div>
            </q-page>
        </q-page-container>
    </q-layout>
    
</template>

<script>


export default {
  data () {
    return {
      selectedDate: '',
      events: ['']
    }
  },
  methods: {
    calendarNext () {
      this.$refs.calendar.next()
    },
    calendarPrev () {
      this.$refs.calendar.prev()
    },
    onModelChanged (date) {
      this.events.unshift(`Model changed: ${date}`)
    },
    onClickDate2 (data) {
      this.events.unshift(`click:date2: ${JSON.stringify(data)}`)
    },
    onClickDayHeader2 (data) {
      this.events.unshift(`click:day:header2: ${JSON.stringify(data)}`)
    },
    onClickInterval2 (data) {
      this.events.unshift(`click:interval2: ${JSON.stringify(data)}`)
    },
    onClickTime2 (data) {
      this.events.unshift(`click:time2: ${JSON.stringify(data)}`)
    },
    onClickIntervalHeader2 (data) {
      this.events.unshift(`click:interval:header2: ${JSON.stringify(data)}`)
    }
  }
}
</script>

<style lang="sass" scoped>
.my-text-caption
  font-size: 0.7rem
  font-weight: 400
  line-height: .75rem !important
  letter-spacing: 0.03333em
</style>
<style>
.bg{
    background-color: #F0F4F3;
    background-image: url("src/assets/bg.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>

