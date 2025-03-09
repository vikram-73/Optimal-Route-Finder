import sys
import heapq

# Class Pair with two integer fields: first and second
class Pair:
    def __init__(self, first, second):
        self.first = first
        self.second = second
    # Define less-than for PriorityQueue based on 'first'
    def __lt__(self, other):
        return self.first < other.first

# Class Pairs with fields: str, time, and distance
class Pairs:
    def __init__(self, str, time, distance):
        self.str = str
        self.time = time
        self.distance = distance

class Main:
    @staticmethod
    def ShortestDistance(sou, des, metro_map, str_to_num, num_to_str):
        pq = []
        heapq.heappush(pq, Pair(0, sou))
        ar = [sys.maxsize for _ in range(57)]
        ar[sou] = 0
        while len(pq) != 0:
            pa = heapq.heappop(pq)
            dist1 = pa.first
            cur1 = pa.second
            cur = num_to_str[cur1]
            for i in range(len(metro_map[cur])):
                x1 = metro_map[cur][i]
                str5 = x1.str
                num9 = str_to_num[str5]
                dis = x1.distance
                if dis + dist1 < ar[num9]:
                    ar[num9] = dis + dist1
                    heapq.heappush(pq, Pair(ar[num9], num9))
        print(str(ar[des]) + " meters")
    
    @staticmethod
    def ShortestTime(sou, des, metro_map, str_to_num, num_to_str):
        pq = []
        heapq.heappush(pq, Pair(0, sou))
        ar = [sys.maxsize for _ in range(57)]
        ar[sou] = 0
        while len(pq) != 0:
            pa = heapq.heappop(pq)
            time1 = pa.first
            cur1 = pa.second
            cur = num_to_str[cur1]
            for i in range(len(metro_map[cur])):
                x1 = metro_map[cur][i]
                str5 = x1.str
                num9 = str_to_num[str5]
                ti = x1.time
                if ti + time1 < ar[num9]:
                    ar[num9] = ti + time1
                    heapq.heappush(pq, Pair(ar[num9], num9))
        print(str(ar[des]) + " minutes")
    
    @staticmethod
    def Func1(str_to_num, metro_map):
        k = 0
        for str in metro_map:
            str_to_num[str] = k
            k += 1
    
    @staticmethod
    def PrintTheStations(str_to_num):
        for s in str_to_num:
            print(s)
    
    @staticmethod
    def Func2(num_to_str, str_to_num):
        for s in str_to_num:
            num = str_to_num[s]
            num_to_str[num] = s
    
    @staticmethod
    def Add_Map(metro_map):
        #Red line
        metro_map["Miyapur"] = []
        metro_map["Miyapur"].append(Pairs("JNTU_College", 3, 1800))
        
        metro_map["JNTU_College"] = []
        metro_map["JNTU_College"].append(Pairs("Miyapur", 3, 1800))
        metro_map["JNTU_College"].append(Pairs("KPHP_Colony", 3, 1400))
        
        metro_map["KPHP_Colony"] = []
        metro_map["KPHP_Colony"].append(Pairs("JNTU_College", 3, 1400))
        metro_map["KPHP_Colony"].append(Pairs("Kukatpally", 3, 1500))
        
        metro_map["Kukatpally"] = []
        metro_map["Kukatpally"].append(Pairs("KPHP_Colony", 3, 1500))
        metro_map["Kukatpally"].append(Pairs("Balanagar", 2, 1500))
        
        metro_map["Balanagar"] = []
        metro_map["Balanagar"].append(Pairs("Kukatpally", 2, 1500))
        metro_map["Balanagar"].append(Pairs("Moosapet", 2, 600))
        
        metro_map["Moosapet"] = []
        metro_map["Moosapet"].append(Pairs("Balanagar", 2, 600))
        metro_map["Moosapet"].append(Pairs("Bharat_Nagar", 2, 1000))
        
        metro_map["Bharat_Nagar"] = []
        metro_map["Bharat_Nagar"].append(Pairs("Moosapet", 2, 1000))
        metro_map["Bharat_Nagar"].append(Pairs("Erragadda", 2, 900))
        
        metro_map["Erragadda"] = []
        metro_map["Erragadda"].append(Pairs("Bharat_Nagar", 2, 900))
        metro_map["Erragadda"].append(Pairs("ESI_Hospital", 2, 200))
        
        metro_map["ESI_Hospital"] = []
        metro_map["ESI_Hospital"].append(Pairs("Erragadda", 2, 200))
        metro_map["ESI_Hospital"].append(Pairs("SR_Nagar", 2, 1700))
        
        metro_map["SR_Nagar"] = []
        metro_map["SR_Nagar"].append(Pairs("ESI_Hospital", 2, 1700))
        metro_map["SR_Nagar"].append(Pairs("Ameerpet", 2, 700))
        
        metro_map["Ameerpet"] = []
        metro_map["Ameerpet"].append(Pairs("SR_Nagar", 2, 700))
        metro_map["Ameerpet"].append(Pairs("Begumpet", 2, 1600))
        metro_map["Ameerpet"].append(Pairs("Madhura_Nagar", 2, 700))
        metro_map["Ameerpet"].append(Pairs("Panjagutta", 3, 1300))
        
        metro_map["Panjagutta"] = []
        metro_map["Panjagutta"].append(Pairs("Ameerpet", 3, 1300))
        metro_map["Panjagutta"].append(Pairs("Irrum_Manzil", 2, 1000))
        
        metro_map["Irrum_Manzil"] = []
        metro_map["Irrum_Manzil"].append(Pairs("Panjagutta", 2, 1000))
        metro_map["Irrum_Manzil"].append(Pairs("Khairatabad", 3, 1200))
        
        metro_map["Khairatabad"] = []
        metro_map["Khairatabad"].append(Pairs("Irrum_Manzil", 3, 1200))
        metro_map["Khairatabad"].append(Pairs("Lakdi-Ka-Pul", 2, 1200))
        
        metro_map["Lakdi-Ka-Pul"] = []
        metro_map["Lakdi-Ka-Pul"].append(Pairs("Khairatabad", 2, 1200))
        metro_map["Lakdi-Ka-Pul"].append(Pairs("Assembly", 2, 1100))
        
        metro_map["Assembly"] = []
        metro_map["Assembly"].append(Pairs("Lakdi-Ka-Pul", 2, 1100))
        metro_map["Assembly"].append(Pairs("Nampally", 2, 700))
        
        metro_map["Nampally"] = []
        metro_map["Nampally"].append(Pairs("Assembly", 2, 700))
        metro_map["Nampally"].append(Pairs("Gandhi_Bhavan", 2, 800))
        
        metro_map["Gandhi_Bhavan"] = []
        metro_map["Gandhi_Bhavan"].append(Pairs("Nampally", 2, 800))
        metro_map["Gandhi_Bhavan"].append(Pairs("Osmania_Medical_College", 2, 800))
        
        metro_map["Osmania_Medical_College"] = []
        metro_map["Osmania_Medical_College"].append(Pairs("Gandhi_Bhavan", 2, 800))
        metro_map["Osmania_Medical_College"].append(Pairs("MG_Bus_Station", 2, 900))
        
        metro_map["MG_Bus_Station"] = []
        metro_map["MG_Bus_Station"].append(Pairs("Osmania_Medical_College", 2, 900))
        metro_map["MG_Bus_Station"].append(Pairs("Sulthan_Bazaar", 3, 2100))
        metro_map["MG_Bus_Station"].append(Pairs("Malakpet", 2, 800))
        
        metro_map["Malakpet"] = []
        metro_map["Malakpet"].append(Pairs("MG_Bus_Station", 2, 800))
        metro_map["Malakpet"].append(Pairs("New_Market", 2, 1200))
        
        metro_map["New_Market"] = []
        metro_map["New_Market"].append(Pairs("Malakpet", 2, 1200))
        metro_map["New_Market"].append(Pairs("Musarambagh", 2, 1000))
        
        metro_map["Musarambagh"] = []
        metro_map["Musarambagh"].append(Pairs("New_Market", 2, 1000))
        metro_map["Musarambagh"].append(Pairs("Dilsukhnagar", 3, 1500))
        
        metro_map["Dilsukhnagar"] = []
        metro_map["Dilsukhnagar"].append(Pairs("Musarambagh", 3, 1500))
        metro_map["Dilsukhnagar"].append(Pairs("Chaitanyapuri", 2, 1100))
        
        metro_map["Chaitanyapuri"] = []
        metro_map["Chaitanyapuri"].append(Pairs("Dilsukhnagar", 2, 1100))
        metro_map["Chaitanyapuri"].append(Pairs("Victoria_Memorial", 2, 1200))
        
        metro_map["Victoria_Memorial"] = []
        metro_map["Victoria_Memorial"].append(Pairs("Chaitanyapuri", 2, 1200))
        metro_map["Victoria_Memorial"].append(Pairs("LB_Nagar", 2, 1400))
        
        metro_map["LB_Nagar"] = []
        metro_map["LB_Nagar"].append(Pairs("Victoria_Memorial", 2, 1400))
        
        #blue line
        metro_map["Raidurg"] = []
        metro_map["Raidurg"].append(Pairs("HITEC_City", 2, 1500))
        
        metro_map["HITEC_City"] = []
        metro_map["HITEC_City"].append(Pairs("Raidurg", 2, 1500))
        metro_map["HITEC_City"].append(Pairs("Durgam_Cheruvu", 2, 900))
        
        metro_map["Durgam_Cheruvu"] = []
        metro_map["Durgam_Cheruvu"].append(Pairs("HITEC_City", 2, 900))
        metro_map["Durgam_Cheruvu"].append(Pairs("Madhapur", 3, 1600))
        
        metro_map["Madhapur"] = []
        metro_map["Madhapur"].append(Pairs("Durgam_Cheruvu", 3, 1600))
        metro_map["Madhapur"].append(Pairs("Peddamma_Gudi", 2, 1200))
        
        metro_map["Peddamma_Gudi"] = []
        metro_map["Peddamma_Gudi"].append(Pairs("Madhapur", 2, 1200))
        metro_map["Peddamma_Gudi"].append(Pairs("Jubilee_Hills_Check_Post", 2, 700))
        
        metro_map["Jubilee_Hills_Check_Post"] = []
        metro_map["Jubilee_Hills_Check_Post"].append(Pairs("Peddamma_Gudi", 2, 700))
        metro_map["Jubilee_Hills_Check_Post"].append(Pairs("Road_No_5_Jubilee_Hills", 3, 1400))
        
        metro_map["Road_No_5_Jubilee_Hills"] = []
        metro_map["Road_No_5_Jubilee_Hills"].append(Pairs("Jubilee_Hills_Check_Post", 3, 1400))
        metro_map["Road_No_5_Jubilee_Hills"].append(Pairs("Yusufguda", 2, 900))
        
        metro_map["Yusufguda"] = []
        metro_map["Yusufguda"].append(Pairs("Road_No_5_Jubilee_Hills", 2, 900))
        metro_map["Yusufguda"].append(Pairs("Madhura_Nagar", 3, 1500))
        
        metro_map["Madhura_Nagar"] = []
        metro_map["Madhura_Nagar"].append(Pairs("Yusufguda", 3, 1500))
        metro_map["Madhura_Nagar"].append(Pairs("Ameerpet", 2, 700))
        
        metro_map["Begumpet"] = []
        metro_map["Begumpet"].append(Pairs("Ameerpet", 2, 1600))
        metro_map["Begumpet"].append(Pairs("Prakash_Nagar", 2, 1400))
        
        metro_map["Prakash_Nagar"] = []
        metro_map["Prakash_Nagar"].append(Pairs("Begumpet", 2, 1400))
        metro_map["Prakash_Nagar"].append(Pairs("Rasoolpura", 2, 1100))
        
        metro_map["Rasoolpura"] = []
        metro_map["Rasoolpura"].append(Pairs("Prakash_Nagar", 2, 1100))
        metro_map["Rasoolpura"].append(Pairs("Paradise", 2, 1100))
        
        metro_map["Paradise"] = []
        metro_map["Paradise"].append(Pairs("Rasoolpura", 2, 1100))
        metro_map["Paradise"].append(Pairs("Parade_Ground", 2, 1200))
        
        metro_map["Parade_Ground"] = []
        metro_map["Parade_Ground"].append(Pairs("Paradise", 2, 1200))
        metro_map["Parade_Ground"].append(Pairs("Secundherabad_West", 2, 1000))
        metro_map["Parade_Ground"].append(Pairs("Secundherabad_East", 3, 1500))
        
        metro_map["Secundherabad_East"] = []
        metro_map["Secundherabad_East"].append(Pairs("Parade_Ground", 3, 1500))
        metro_map["Secundherabad_East"].append(Pairs("Mettuguda", 3, 1900))
        
        metro_map["Mettuguda"] = []
        metro_map["Mettuguda"].append(Pairs("Secundherabad_East", 3, 1900))
        metro_map["Mettuguda"].append(Pairs("Tarnaka", 2, 1300))
        
        metro_map["Tarnaka"] = []
        metro_map["Tarnaka"].append(Pairs("Mettuguda", 2, 1300))
        metro_map["Tarnaka"].append(Pairs("Habsiguda", 3, 1600))
        
        metro_map["Habsiguda"] = []
        metro_map["Habsiguda"].append(Pairs("Tarnaka", 3, 1600))
        metro_map["Habsiguda"].append(Pairs("NGRI", 2, 800))
        
        metro_map["NGRI"] = []
        metro_map["NGRI"].append(Pairs("Habsiguda", 2, 800))
        metro_map["NGRI"].append(Pairs("Stadium", 2, 1200))
        
        metro_map["Stadium"] = []
        metro_map["Stadium"].append(Pairs("NGRI", 2, 1200))
        metro_map["Stadium"].append(Pairs("Uppal", 2, 1100))
        
        metro_map["Uppal"] = []
        metro_map["Uppal"].append(Pairs("Stadium", 2, 1100))
        metro_map["Uppal"].append(Pairs("Nagole", 2, 1000))
        
        metro_map["Nagole"] = []
        metro_map["Nagole"].append(Pairs("Uppal", 2, 1000))
        
        #green line
        metro_map["Secundherabad_West"] = []
        metro_map["Secundherabad_West"].append(Pairs("Parade_Ground", 2, 1000))
        metro_map["Secundherabad_West"].append(Pairs("Gandhi_Hospital", 2, 1000))
        
        metro_map["Gandhi_Hospital"] = []
        metro_map["Gandhi_Hospital"].append(Pairs("Secundherabad_West", 2, 1000))
        metro_map["Gandhi_Hospital"].append(Pairs("Musheerabad", 2, 1500))
        
        metro_map["Musheerabad"] = []
        metro_map["Musheerabad"].append(Pairs("Gandhi_Hospital", 2, 1500))
        metro_map["Musheerabad"].append(Pairs("RTC_X_Roads", 2, 1300))
        
        metro_map["RTC_X_Roads"] = []
        metro_map["RTC_X_Roads"].append(Pairs("Musheerabad", 2, 1300))
        metro_map["RTC_X_Roads"].append(Pairs("Chikkadpally", 3, 1900))
        
        metro_map["Chikkadpally"] = []
        metro_map["Chikkadpally"].append(Pairs("RTC_X_Roads", 3, 1900))
        metro_map["Chikkadpally"].append(Pairs("Narayanaguda", 1, 900))
        
        metro_map["Narayanaguda"] = []
        metro_map["Narayanaguda"].append(Pairs("Chikkadpally", 1, 900))
        metro_map["Narayanaguda"].append(Pairs("Sulthan_Bazaar", 2, 1400))
        
        metro_map["Sulthan_Bazaar"] = []
        metro_map["Sulthan_Bazaar"].append(Pairs("Narayanaguda", 2, 1400))
        metro_map["Sulthan_Bazaar"].append(Pairs("MG_Bus_Station", 3, 2100))
    
    @staticmethod
    def main(args):
        # Using input() for Scanner equivalent
        metro_map = {}
        Main.Add_Map(metro_map)
        #str to number
        str_to_num = {}
        Main.Func1(str_to_num, metro_map)
        #num to string
        num_to_str = {}
        Main.Func2(num_to_str, str_to_num)
        print("Press 1 to show the Station Names")
        print("Press 2 to find minimum distance to reach source to destination")
        print("Press 3 to find minimum time to reach source to destination")
        choice = int(input())
        if choice == 1:
            Main.PrintTheStations(str_to_num)
        elif choice == 2:
            source = input()
            destination = input()
            if source not in metro_map or destination not in metro_map:
                print("Enter Valid Stations")
                sys.exit(0)
            v1 = str_to_num[source]
            v2 = str_to_num[destination]
            Main.ShortestDistance(v1, v2, metro_map, str_to_num, num_to_str)
        elif choice == 3:
            source = input()
            destination = input()
            if source not in metro_map or destination not in metro_map:
                print("Enter Valid Stations")
                sys.exit(0)
            v1 = str_to_num[source]
            v2 = str_to_num[destination]
            Main.ShortestTime(v1, v2, metro_map, str_to_num, num_to_str)
        else:
            print("Enter Valid Choice")

if __name__ == "__main__":
    Main.main(None)
    
